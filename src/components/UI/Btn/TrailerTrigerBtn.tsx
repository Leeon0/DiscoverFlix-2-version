'use client'
import useTrailer from '@/store/useTrailer'

export default function TrailerTrigerBtn({
    videos,
    children,
}: {
    videos: any; // Video data
    children: React.ReactNode; // Content of the button
}) {
    // Extracting state and functions from useTrailer hook
    const {
        setModalIsOpen,
        setSelectedVideoId,
        miniReproductor,
        selectedVideoId,
        setMiniReproductor,
    } = useTrailer((state) => state);

    // Check if there are no videos available
    const sinVideo = videos.results.length === 0;

    // Get the ID of the first video in the list
    const videoId = videos.results[0]?.key;

    // Handle click event for showing the trailer modal
    const handleTrailer = () => {
        // If there are no videos available, do nothing
        if (sinVideo) return;

        // If the video is already playing, just extend the modal
        if (selectedVideoId === videoId) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.body.style.overflow = 'hidden';
            setMiniReproductor(false);
        }

        // If the player is in mini mode, just change the video
        if (miniReproductor) {
            setSelectedVideoId(videoId);
            return setModalIsOpen(true);
        }

        // Open modal and play the new video
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.style.overflow = 'hidden';
        setSelectedVideoId(videoId);
        setModalIsOpen(true);
    };

    return (
        <button
            onClick={handleTrailer} // Click event handler
            disabled={sinVideo} // Disable button if no videos available
            aria-label='Show video about the movie' // Accessible label
        >
            {!sinVideo && children} {/* Render button content if there are videos */}
        </button>
    );
}
