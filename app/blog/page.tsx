import { sharedMetadata } from '@/shared/metadata'

export const metadata = {
    title: 'Blog page',
    openGraph: {
        ...sharedMetadata.openGraph,
        url: 'https://example.com/blog'
    }
}
 
export default function Blog() {
 
    return (
        <>
            I&apos;m the blog page
        </>
    )
}