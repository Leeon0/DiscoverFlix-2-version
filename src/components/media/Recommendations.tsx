import { fetchRecomendacionMovie } from '@/lib/api'
import React from 'react'
import { Media } from '@/types/types'
import '@/styles/scrollAnimate.css'
import MovieCard from '../UI/card/MovieCard'
import MoviePreview from './MoviePreview'
import Link from 'next/link'
import EspaciadoLayout from '../layout/EspaciadoLayout'
import ImagesGridLayout from '../layout/ImagesGridLayout'

export default async function Recommendations({
    id,
    type,
}: {
    id: string;
    type: string;
}): Promise<JSX.Element | null> {
    // Fetch recommendations for the specified movie or series
    const recomendacion = await fetchRecomendacionMovie(type, id);

    // If there are no recommendations, return null
    if (recomendacion.total_results === 0) return null;

    // Filter recommendations to exclude items with missing images and low popularity
    const dataFilter = recomendacion.results.filter(
        (movie: Media) =>
            movie.poster_path !== null &&
            movie.backdrop_path !== null &&
            movie.popularity > 100.0
    );

    return (
        <EspaciadoLayout component='section' className='py-8 2xl:pb-20'>
            <h3 className='font-semibold mb-6 text-xl md:text-2xl'>
                Recomendations
            </h3>
            <ImagesGridLayout>
                {dataFilter.map((result: Media, index: number) => (
                    <Link
                        key={result.id}
                        href={`/media/${result.id}-${type}`}
                        className={index === 0 ? 'md:col-span-2 xl:col-span-1' : ''}
                    >
                        <MovieCard animate={index !== 0} result={result} />
                    </Link>
                ))}
            </ImagesGridLayout>
        </EspaciadoLayout>
    );
}
