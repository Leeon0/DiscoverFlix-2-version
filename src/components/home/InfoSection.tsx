import { Play } from '@/icons/Icons'
import type { GenreTv, MoviesAndSeries } from '@/types/types'
import { getGenreNamesByIds } from '@/utils/getGenreNamesByIds'
import Link from 'next/link'
import EspaciadoLayout from '../layout/EspaciadoLayout'

export default function InfoSection({
    movies, // Array of movies and series
    currentIndex, // Index of the currently selected movie
    genresMovies, // Object containing genre information
}: {
    movies: MoviesAndSeries[]; // Type of the movies property
    currentIndex: number; // Type of the currentIndex property
    genresMovies: GenreTv; // Type of the genresMovies property
}) {
    // Get genre names by their IDs
    const genreNamesByIds = getGenreNamesByIds(
        genresMovies.genres,
        movies[currentIndex]?.genre_ids
    );

    // Get the currently selected movie
    const currentMovie = movies?.[currentIndex];

    // Render the component
    return (
        <EspaciadoLayout className='relative pb-10 z-10 transition-all'>
            <div className={`flex flex-col gap-4 justify-end sm:max-w-lg `}>
                <div className='animate-fadeInUp flex flex-col justify-end gap-4 min-h-[100px]'>
                    {/* Movie title */}
                    <h2
                        className={`text-white line-clamp-2 text-xl mv:text-2xl md:text-[1.9rem] font-medium lg:text-4xlb uppercase`}
                    >
                        {currentMovie.title}
                    </h2>

                    {/* List of genres */}
                    <ul className='flex text-xs gap-4  lg:text-sm lg:gap-6'>
                        {genreNamesByIds?.slice(0, 3).map((genre) => (
                            <li
                                key={genre?.id}
                                className='text-txtGray2 hover:text-white'
                            >
                                {/* Link to search movies by genre */}
                                <Link href={`/search/movie?genre=${genre?.id}`}>
                                    {genre?.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Link to watch the trailer */}
                <Link
                    aria-label={`Ver trailer de ${currentMovie.title}`}
                    href={`/media/${currentMovie.id}-movie`}
                    className='sm:mt-4 w-[36px] h-[36px] lg:w-[45px] lg:h-[45px] hover:scale-125 transition duration-300'
                >
                    <Play />
                </Link>
            </div>
        </EspaciadoLayout>
    );
}
