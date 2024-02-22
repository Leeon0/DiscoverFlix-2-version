import { fetchActorForId } from '@/lib/api'
import { Actor } from '@/types/types'
import Image from 'next/image'

export default async function Frame({ path }: { path: any }) {
    // Extract the actor ID from the path
    const [id] = path.id.split('-');
    
    // Fetch actor details using the actor ID
    const actor: Actor = await fetchActorForId(id);

    return (
        <div className='h-full w-full relative z-50'>
            {/* Container for the actor image */}
            <figure className='relative after:content-[""] after:absolute after:inset-0 after:bg-gradiantBottonCard'>
                {/* Display the actor image */}
                <Image
                    src={`https://image.tmdb.org/t/p/w780/${actor.profile_path}`} // Construct image URL
                    alt={`Actor ${actor.name}`} // Alt text for accessibility
                    width={342} // Width of the image
                    height={513} // Height of the image
                    style={{
                        width: 'auto', // Auto-adjust width
                        height: 'auto', // Auto-adjust height
                        viewTransitionName: `actors-${actor.id}`, // Transition name
                    }}
                    className='rounded aspect-[9/13.5] w-auto h-auto ' // Styling classes
                />
            </figure>
            {/* Footer section containing actor name */}
            <footer className='absolute bottom-0 w-full py-2 sm:p-[13px] sm:text-left sm:text-[#fff] bg-transparent'>
                {/* Display the actor name */}
                <h4 className='text-center text-sm line-clamp-1 sm:font-semibold sm:text-base md:text-xl'>
                    {actor.name}
                </h4>
            </footer>
        </div>
    );
}
