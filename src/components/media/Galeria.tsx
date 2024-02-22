'use client'
import { useState } from 'react' // REACT
import { Galeria } from '@/types/types' // TYPES
import '@/styles/scrollAnimate.css' // STYLES
import { useParams } from 'next/navigation'
import { ImageInfo } from '@/types/types'
import Loading from '@/app/loading'

export default function Galeria() {
    // State variables to manage gallery data, image visibility, and loading state
    const [galeria, setGaleria] = useState<Galeria | null>(null);
    const [showImages, setShowImages] = useState(false);
    const [loading, setLoading] = useState(false);

    // Extracting media ID from URL params
    const params = useParams();
    const id = String(params.mediaInfo).split('-')[0];

    // Function to fetch gallery data for the given media ID
    const fetchGaleriaMovie = () => {
        setLoading(true);
        fetch(`/api/galeria?id=${id}`)
            .then((res) => res.json())
            .then((data) => setGaleria(data))
            .catch((err) => setShowImages(false))
            .finally(() => {
                setLoading(false);
            });
    };

    // Function to handle click event to show/hide images
    const handleClick = () => {
        if (galeria) {
            return setShowImages(!showImages);
        }
        fetchGaleriaMovie();
        setShowImages(!showImages);
    };

    return (
        <div className='relative z-10'>
            {/* Button to toggle visibility of images */}
            <div className='flex gap-4 sticky top-[5vh] z-50 sm:top-[10vh] justify-center items-center'>
                <button
                    onClick={handleClick}
                    className='text-white/60 bg-black/70 uppercase border rounded-xl px-4 py-2 text-xs font-bold hover:text-white transition-colors duration-300'
                    aria-label={
                        showImages ? 'Hide Posters Gallery' : 'Show Posters Galery'
                    }
                >
                    {showImages ? 'Hide Posters Gallery' : 'Show Posters Galeria'}
                </button>
            </div>

            {/* Loading indicator */}
            {loading && <Loading />}

            {/* Displaying gallery images if available and showImages state is true */}
            {showImages && galeria && (
                <picture className='flex px-10 flex-col gap-[20vh] pt-[6vh] sm:grid sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:px-0 2xl:grid-cols-4'>
                    {/* Mapping over posters to display each image */}
                    {galeria.posters.map((poster: ImageInfo, index: number) => (
                        <img
                            key={poster.file_path}
                            src={`https://image.tmdb.org/t/p/w780${poster.file_path}`}
                            alt={`Galeria de Imagen ${galeria.id}`}
                            width={500}
                            height={750}
                            className={`self-center sticky top-[14vh] object-contain rounded sm:static sm:top-auto ${
                                index % 2 === 0 ? 'imgScroll' : 'imgScroll2'
                            }`}
                            style={{
                                width: 'auto',
                                height: 'auto',
                            }}
                            loading='lazy'
                        />
                    ))}
                </picture>
            )}
        </div>
    );
}
