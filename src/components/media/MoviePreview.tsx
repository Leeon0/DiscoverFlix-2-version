import { Media } from '@/types/types' // Type
import { Hd, Play } from '../icons/Icons' // Icons
import { formatDate } from '@/utils/formatDate' // utils

export default function MoviePreview({ result }: { result: Media }): JSX.Element {
    // Determine the title and release date of the movie or series
    const title = result.title ?? result.name;
    const time = result.release_date ?? result.first_air_date;

    return (
        <article className='relative grid-cols-1 sm:grid-cols-2 grid lg:grid-cols-2 xl:grid-cols-1 h-full'>
            {/* Header section containing the title, release date, and backdrop image */}
            <header className="relative group before:content-[''] before:top-0 before:w-full before:h-full before:bg-gradiantBottonCard before:absolute ">
                <div className='absolute scroll-parallax pl-4 pb-1 z-10 bottom-0'>
                    {/* Display the title of the movie or series */}
                    <h4 className='font-semibold text-xl line-clamp-1 lg:text-2xl xl:text-xl'>
                        {title}
                    </h4>
                    {/* Display the release date of the movie or series */}
                    <span className='text-xs md:text-sm lg:text-base xl:text-xs'>
                        {' '}
                        {formatDate(time)}{' '}
                    </span>
                </div>
                {/* Display the backdrop image of the movie or series */}
                <img
                    src={`https://image.tmdb.org/t/p/w780${result.backdrop_path}`}
                    alt={`Poster ${title}`}
                    width={500}
                    height={300}
                    className='w-full h-full object-cover'
                />
                {/* Play button icon */}
                <span className='absolute w-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] border rounded-full inline-block opacity-0 group-hover:opacity-100 hover:transition group-hover:-translate-y-[50%] hover:duration-300 transition duration-300'>
                    <Play />
                </span>
            </header>
            {/* Footer section containing the overview and HD icon */}
            <footer className='bg-white text-black p-4 md:flex md:flex-col xl:hidden'>
                <div className='md:flex-1'>
                    {/* Display the overview of the movie or series */}
                    <p className='text-xs leading-5 line-clamp-5 mb-4 md:line-clamp-6 md:text-sm lg:line-clamp-none'>
                        {result.overview}
                    </p>
                </div>
                <div>
                    {/* HD icon */}
                    <span className='text-white'>
                        <Hd />
                    </span>
                </div>
            </footer>
        </article>
    );
}

