'use client'
import TrailerPlayer from './TrailerPlayer'
import ModalTrailer from '../UI/modal/ModalTrailer'
import useTrailer from '@/store/useTrailer'
import { useTransition, animated } from 'react-spring'

export default function ShowTrailer() {
    // Retrieve modal state and selected video ID from context
    const { modalIsOpen, selectedVideoId } = useTrailer((state) => state);

    // Apply transitions to the modal based on its open/close state
    const transitions = useTransition(modalIsOpen, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 500 },
    });

    return (
        <>
            {transitions((style, item) =>
                item && (
                    <animated.div style={{ opacity: style.opacity }}>
                        {/* Render the TrailerPlayer inside a ModalTrailer */}
                        <ModalTrailer>
                            <TrailerPlayer videoId={selectedVideoId} />
                        </ModalTrailer>
                    </animated.div>
                )
            )}
        </>
    );
}
