'use client'
import type { GenreTv, MoviesAndSeries } from '@/types/types'
import { useState } from 'react'
import BackgroundImage from './BackgroundImage'
import InfoSection from './InfoSection'
import SwiperHome from './SwiperHome'
import EspaciadoLayout from '../layout/EspaciadoLayout'

export default function HomeHeader({
    moviesTrends, // Array of trending movies and series
    genresMovies, // Object containing genre information
}: {
    moviesTrends: MoviesAndSeries[]; // Type of the moviesTrends property
    genresMovies: GenreTv; // Type of the genresMovies property
}) {
    // State to track the current index of the swiper
    const [currentIndex, setCurrentIndex] = useState(0);

    // Render the component
    return (
        <div className='relative mt-nav sm:mt-0 h-screenMovil sm:h-screen'>
            {/* Background image component */}
            <BackgroundImage
                currentIndex={currentIndex}
                movies={moviesTrends}
            />
            <div className='h-screenMovil sm:h-screen flex flex-col justify-end '>
                {/* Information section component */}
                <InfoSection
                    currentIndex={currentIndex}
                    movies={moviesTrends}
                    genresMovies={genresMovies}
                />
                {/* Swiper component for trending movies */}
                <EspaciadoLayout className='relative z-30 mb-2 sm:mb-4'>
                    <h2 className='text-white z-20 relative font-medium mb-3 uppercase'>
                        Latest movies
                    </h2>
                    <SwiperHome
                        movies={moviesTrends}
                        setCurrentIndex={setCurrentIndex}
                    />
                </EspaciadoLayout>
            </div>
        </div>
    );
}