import { sharedMetadata } from '@/shared/metadata'

const title = 'Blog page'

export const metadata = {
    title: title,
    openGraph: {
        ...sharedMetadata.openGraph,
        url: 'https://example.com/blog',
        images: [{
            alt: title,
            url: `/og/${title}/opengraph-image`,
            width: 1200,
            height: 630,
            type: 'image/png',
        }]
    }
}
 
export default function Blog() {
 
    return (
        <>
            I&apos;m the blog page
        </>
    )
}