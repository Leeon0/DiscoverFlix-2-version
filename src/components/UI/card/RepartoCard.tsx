import { Cast } from '@/types/types'
import Link from 'next/link'

interface RepartoCardProps {
    actor: Cast; // Cast member object
    type: string; // Type of media associated with the cast member
}

export default function RepartoCard({ actor, type }: RepartoCardProps) {
    return (
        <Link
            href={`/actor/${actor.id}-${type}`} // Link URL for the actor details page
            className='relative snap-start' // Styling class for positioning
            scroll={false} // Disable scroll behavior
        >
            {/* Container for the actor image */}
            <figure
                id='contenedorImageReparto'
                className='w-40 lg:w-48 xl:w-[230px] relative after:content-[""] after:absolute after:inset-0 after:bg-gradiantBottonCard'
            >
                {/* Display the actor image */}
                <img
                    src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`} // Actor image URL
                    alt={`Actor ${actor.name}`} // Alt text for accessibility
                    width={342} // Width of the image
                    height={513} // Height of the image
                    style={{
                        width: 'auto', // Auto-adjust width
                        height: 'auto', // Auto-adjust height
                        viewTransitionName: `actor-${actor.id}`, // Transition name
                    }}
                    className='rounded-lg saturate-[1.2] w-auto h-auto' // Styling classes
                />
            </figure>
            {/* Footer section containing character name and actor name */}
            <footer className='text-center absolute bottom-0 w-full py-2 sm:p-[13px] sm:text-left sm:text-[#fff] bg-transparent'>
                {/* Display the character name */}
                <h4 className='text-sm line-clamp-1 sm:font-semibold sm:text-base'>
                    {actor.character}
                </h4>
                {/* Display the actor name */}
                <span className='hidden sm:block text-sm sm:line-clamp-1 truncate'>
                    {actor.name}
                </span>
            </footer>
        </Link>
    );
}