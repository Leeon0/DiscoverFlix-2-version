import { formatDate } from '@/utils/formatDate'
import Image from 'next/image'
import { Play } from '@/icons/Icons'
import '@/styles/scrollAnimate.css'

export default function MovieCard({
    result,
    animate,
}: {
    result: any; // Movie or TV show data
    animate?: boolean; // Flag to enable animation (optional)
}) {
    // Extract title and release date from result
    const title = result.title ?? result.name;
    const time = result.release_date ?? result.first_air_date;

    return (
        <div className={`relative before:content-[''] before:top-0 before:w-full before:h-full before:bg-gradiantBottonCard before:absolute group before:z-10 h-full`}>
            {/* Display the movie or TV show poster */}
            <img
                src={`https://image.tmdb.org/t/p/w780${result.backdrop_path}`} // Poster image URL
                alt={`Poster ${title}`} // Alt text for accessibility
                width={500} // Width of the image
                height={282} // Height of the image
                className='w-full saturate-[1.1] rounded-lg h-full' // Styling classes
            />
            {/* Container for title and release date */}
            <div className={`absolute ${animate ? 'scroll-parallax' : ''} bottom-0 pl-4 pb-1 z-10 group-hover:text-white transition-colors duration-300 hover:duration-300 hover:transition`}>
                {/* Display the title */}
                <h3 className='font-semibold text-sm line-clamp-1 uppercase leading-4'>{title}</h3>
                {/* Display the release date */}
                <span className='text-xs uppercase'>{formatDate(time)}</span>
            </div>
            {/* Play button */}
            <span className='absolute w-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] border rounded-full inline-block opacity-0 group-hover:opacity-100 hover:transition group-hover:-translate-y-[50%] hover:duration-300 transition duration-300 z-30'>
                <Play />
            </span>
        </div>
    );
}
