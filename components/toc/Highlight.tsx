'use client'

import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import type { PropsWithChildren, ReactElement, ReactNode } from 'react'
import { Children, cloneElement, isValidElement } from 'react'
import styles from './highlight.module.css'

interface IProps extends PropsWithChildren {
    headingsToObserve?: string
    rootMargin?: string
    threshold?: number
}

interface IChildProps {
    className: string
    href: string
    children: ReactElement<IChildProps>
}


const TocHighlight: React.FC<IProps> = (props): JSX.Element => {

    const { headingsToObserve, rootMargin, threshold, ...rest } = props

    const tocHeadingsToObserve = headingsToObserve ?? 'h1, h2, h3'
    const tocRootMargin = rootMargin ?? '-5% 0px -50% 0px'
    const tocThreshold = threshold ?? 1

    const children = Children.toArray(props.children)

    function recursiveChildren(children: ReactNode[], activeIdState: string): ReactNode {

        const newChildren = Children.map(children, child => {

            if (isValidElement<IChildProps>(child)) {

                if (child.props.children) {

                    const children = Children.toArray(child.props.children)

                    child = cloneElement(
                        child,
                        recursiveChildren(children, activeIdState) as ReactElement<IChildProps>
                    )

                }

                if ('href' in child.props) {

                    const childProps = child.props as IChildProps

                    if (childProps.href.substring(1) === activeIdState) {

                        child = cloneElement(
                            child,
                            { className: styles.active }
                        )

                    }
                }

            }

            return child
        })

        return newChildren

    }

    const { activeIdState } = useIntersectionObserver(tocHeadingsToObserve, tocRootMargin, tocThreshold)

    return (
        <>
            <aside {...rest}>
                {recursiveChildren(children, activeIdState)}
            </aside>
        </>
    )
}

export default TocHighlight