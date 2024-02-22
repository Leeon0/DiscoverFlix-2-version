'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import useTrailer from '@/store/useTrailer'
import { animated } from 'react-spring'

export default function ModalTrailer({
    children,
}: {
    children: React.ReactNode;
}) {
    const overlay = useRef(null); // Reference to the overlay element
    const wrapper = useRef(null); // Reference to the wrapper element

    // Get state and actions from useTrailer custom hook
    const { miniReproductor, setMiniReproductor, modalIsOpen } = useTrailer(
        (state) => state
    );

    // Function to dismiss the modal
    const onDismiss = useCallback(() => {
        // Enable scrolling on the body
        document.body.style.overflow = 'auto';
        // Set mini reproductor to true
        return setMiniReproductor(true);
    }, [setMiniReproductor]);

    // Click event handler to dismiss modal
    const onClick: MouseEventHandler = useCallback(
        (e) => {
            // Check if click happened on overlay or wrapper
            if (
                e.target === overlay.current ||
                e.target === wrapper.current
            ) {
                // Call onDismiss function
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    // Keyboard event handler to dismiss modal when escape key is pressed
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onDismiss();
        },
        [onDismiss]
    );

    // Add event listener for keyboard events when component mounts
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);

        // Remove event listener when component unmounts
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);

    return (
        <div
            ref={overlay}
            className={`fixed ${
                miniReproductor
                    ? 'bg-transparent z-[100] w-[400px] bottom-0 right-0'
                    : ' bg-black/60 z-50 w-full h-screen left-0 top-0'
            }`}
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className={`absolute transition-all duration-300 ${
                    miniReproductor
                        ? 'bottom-0 right-0'
                        : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                }`}
            >
                <section
                    className={`aspect-video ${
                        miniReproductor
                            ? 'w-[300px] sm:w-[400px] lg:w-[500px]'
                            : 'w-screen sm:w-[70vw]'
                    }`}
                >
                    <animated.div
                        className={'transition-all duration-500'}
                        style={{
                            transform: modalIsOpen
                                ? 'translateY(0)'
                                : 'translateY(500px)',
                        }}
                    >
                        {children}
                    </animated.div>
                </section>
            </div>
        </div>
    );
}
  