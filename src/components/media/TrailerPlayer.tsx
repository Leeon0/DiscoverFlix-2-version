'use client'
import useTrailer from '@/store/useTrailer'
import { useRef } from 'react'
import ReactPlayer from 'react-player'
import { Extender, CloseIcon } from '../icons/Icons'

export default function TrailerPlayer({ videoId }: { videoId: string | null }) {
    const playerRef = useRef(null); // Reference to the ReactPlayer component
    const { miniReproductor, setMiniReproductor, setModalIsOpen } = useTrailer((state) => state);

    /**
     * Switches the player to full-screen mode and hides mini player.
     */
    const ReproductorPantallaGrande = () => {
        document.body.style.overflow = 'hidden'; // Hide body overflow to prevent scrolling
        setMiniReproductor(false); // Hide mini player
    };

    /**
     * Closes the trailer player modal.
     */
    const CerrarReproductor = () => {
        setModalIsOpen(false); // Close the modal
    };

    return (
        <section className={'aspect-video w-full overflow-hidden rounded-2xl group'}>
            {/* Mini player controls */}
            <div className={`absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ${!miniReproductor && 'hidden'}`}>
                <button onClick={ReproductorPantallaGrande} className='w-8 h-8 opacity-0 group-hover:opacity-100' aria-label='Show trailer'>
                    <Extender />
                </button>
            </div>
            
            {/* Close button for mini player */}
            <div className={`absolute top-4 right-6 bg-black rounded-full ${!miniReproductor && 'hidden'}`}>
                <button onClick={CerrarReproductor} className='flex justify-center items-center' aria-label='Close Player'>
                    <CloseIcon />
                </button>
            </div>
            
            {/* ReactPlayer component */}
            <ReactPlayer
                ref={playerRef}
                url={`https://www.youtube.com/embed/${videoId}`} // URL of the video
                controls={true} // Show video controls
                width='100%' // Set width to 100% of parent container
                height='100%' // Set height to 100% of parent container
                playing={true} // Auto play the video
                onError={(e) => console.error('Error playing the video:', e)} // Handle video playback errors
            />
        </section>
    );
}
