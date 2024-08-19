'use client'
 
import { forwardRef } from 'react'
 
type ButtonRefType = HTMLButtonElement
 
interface PropsInterface {
    clickCallback?: () => void
}
 
const TestButton = forwardRef<ButtonRefType, PropsInterface>((props, buttonRef) => {
 
    const { clickCallback, ...rest } = props
 
    const buttonClickHandler = (/*event: React.MouseEvent<HTMLButtonElement>*/) => {
 
        if (typeof clickCallback === 'function') {
            clickCallback()
        }
 
    }
 
    return (
        <>
            <button
                onClick={buttonClickHandler}
                {...rest}
            >
                I'm a test button
            </button>
        </>
    )
})
 
TestButton.displayName = 'TestButton'
 
export default TestButton
 
/* linting errors I should see in this test component
- line 11:  buttonRef is declared but its value is never read (@typescript-eslint/no-unused-vars)
- line 29: the "'" should be escaped (react/no-unescaped-entities)
- line 35: first you need to comment that line out by adding `//` at the beginning and then you should get: Component definition is missing display name (react/display-name)
*/