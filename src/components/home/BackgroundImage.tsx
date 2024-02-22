import { useState, useMemo, useEffect } from 'react'
import { MoviesAndSeries } from '@/types/types'
import Image from 'next/image'
export default function BackgroundImage({
    movies, // Array of movies and series
    currentIndex, // Index of the current movie in the carousel
}: {
    movies: MoviesAndSeries[] | undefined; // Type of the movies property
    currentIndex: number; // Type of the currentIndex property
}) {
    // State to store the background image URL
    const [backgroundImage, setBackgroundImage] = useState('');

    // Destructure poster_path and backdrop_path from the current movie
    const { poster_path, backdrop_path } = movies?.[currentIndex] || {};

    // Memoized poster image URL
    const posterImageUrl = useMemo(
        () => `https://image.tmdb.org/t/p/w780${poster_path}`,
        [poster_path]
    );

    // Memoized backdrop image URL
    const backdropImageUrl = useMemo(
        () => `https://image.tmdb.org/t/p/original${backdrop_path}`,
        [backdrop_path]
    );

    // Effect to set the background image based on window resize
    useEffect(() => {
        const handleResize = () => {
            const url =
                window.innerWidth >= 1024 ? backdropImageUrl : posterImageUrl;
            setBackgroundImage(url);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [backdropImageUrl, posterImageUrl]);

    // Render the background image section
    return (
        <section className={`absolute flex after:content-[''] after:absolute after:inset-0 after:bg-gradiantLeft after:h-screenMovil after:sm:h-screen  h-screenMovil sm:h-screen w-full before:content-[''] before:absolute before:inset-0 before:z-[1] before:bg-gradiantBotton before:h-screenMovil before:sm:h-screen`}>
            <div className={'w-full top-0 right-0 h-screenMovil sm:h-screen absolute after:absolute after:inset-0 after:bg-gradiantTop2 after:sm:h-screen after:h-screenMovil'}>
                {/* Render the background image if available */}
                {backgroundImage && movies?.[currentIndex] && (
                    <Image
                        src={backgroundImage}
                        alt={`poster ${movies?.[currentIndex].original_title}`}
                        fill
                        sizes='80vw'
                        className={'saturate-[1.2] scrollMove object-top'}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                        priority={true}
                        quality={100}
                    />
                )}
            </div>
        </section>
    );
}
