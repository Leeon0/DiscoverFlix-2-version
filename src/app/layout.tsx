import type { Metadata } from 'next'
import '../styles/globals.css'
import { DMSans } from '../fonts/fonts'
import ShowTrailer from '@/components/media/ShowTrailer'

export const metadata: Metadata = {
    // Base URL for metadata
    metadataBase: new URL('https://flix-zeta.vercel.app/'),
    // Title configurations
    title: {
        default:
            'Discover Flix: Discover and Enjoy the Latest Releases and Movie Classics in an All-in-One Movie Platform',
        template: '%s - Flix',
    },
    // Description of the website
    description:
        'Discover a world of movies Discover an exciting world of movies on Flix, your online movie platform. Explore the latest releases and find detailed information on recent and old movies. From captivating trailers to informative summaries, Discover Flix immerses you in the movie universe. Get reviews and recommendations, discover streaming providers and find the best options to watch your favorite movies. From the latest hits to unforgettable gems, Flix is your destination to explore and enjoy the world of cinema anytime, anywhere - join us for a unique movie experience! on Flix, your online movie platform. Explore the latest releases and find detailed information on recent and old movies. From captivating trailers to informative summaries, Flix immerses you in the world of cinema. Get reviews and recommendations, discover streaming providers and find the best options to watch your favorite movies. From the latest hits to unforgettable gems, Flix is your destination to explore and enjoy the world of cinema anytime, anywhere - join us for a unique movie experience!',
    // Keywords related to the website content
    keywords: [
        'Streaming Platform',
        'Online Movies and Series',
        'Audiovisual Entertainment',
        'Movie Trailers',
        'Movie and Series Details',
        'Movie Database',
        'Movies Online',
        'Latest Releases',
        'Movie Reviews',
        'Interactive Experience',
        'Best Movies',
        'Popular Series',
        'Hidden Gems of Series',
        'Find Out What to Watch',
        'Movie Trailers',
    ],
    // Open Graph metadata for social media sharing
    openGraph: {
        title: 'Discover Flix: Explore, Discover, Enjoy.',
        images: '/og-image.png',
        description:
            '"Immerse yourself in the fascinating universe of cinema with Flix. Discover the latest releases, get reviews and recommendations, and find the best way to enjoy your favorite movies - explore cinema like never before with Flix!"',
    },
    // Referrer policy for the website
    referrer: 'origin-when-cross-origin',
    // Creator of the website
    creator: 'Leonardo Roquett',
    // Publisher of the website
    publisher: 'Leonardo Roquett',
    // Robots meta tag configurations
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

/**
 * Root layout component for the website.
 * 
 * @param {React.ReactNode} props.children - The child components to render within the layout.
 * @param {React.ReactNode} props.modal - The modal component to render.
 * @returns {JSX.Element} - JSX element representing the root layout of the website.
 */
export default function RootLayout(props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                {/* Favicon */}
                <link rel='icon' href='/favicon.ico' sizes='any' />
                <link
                    rel='icon'
                    href='/icon?<generated>'
                    type='image/<generated>'
                    sizes='<generated>'
                />
            </head>
            <body
                className={`select-none max-w-[1920px] mx-auto ${DMSans.className}`}
            >
                {/* Modal */}
                {props.modal}
                {/* Children */}
                {props.children}
                {/* Show Trailer */}
                <ShowTrailer />
            </body>
        </html>
    );
}