import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        'name': 'example manifest | example.com',
        'short_name': 'example',
        'theme_color': '#ffffff',
        'background_color': '#000000',
        'start_url': '/',
        'orientation': 'any',
        'display': 'minimal-ui',
        'dir': 'auto',
        'lang': 'en-US',
        'description': 'you could reuse the from your root layout metadata',
    }
}