'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'

export default function Modal({ children }: { children: React.ReactNode }) {
    const overlay = useRef(null); // Reference to the overlay element
    const wrapper = useRef(null); // Reference to the wrapper element
    const router = useRouter(); // Get router from useRouter hook

    // Function to dismiss the modal
    const onDismiss = useCallback(() => {
        router.back(); // Navigate back using router
        document.body.style.overflow = 'auto'; // Enable scrolling on the body
    }, [router]);

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

    // Add event listeners and update body overflow when component mounts
    useEffect(() => {
        document.addEventListener('keydown', onKeyDown); // Add event listener for keyboard events
        document.body.style.overflow = 'hidden'; // Disable scrolling on the body

        // Remove event listeners and restore body overflow when component unmounts
        return () => {
            document.removeEventListener('keydown', onKeyDown); // Remove event listener for keyboard events
            document.body.style.overflow = 'auto'; // Restore scrolling on the body
        };
    }, [onKeyDown]);

    return (
        <div
            ref={overlay}
            className={`fixed bg-black/60 z-[200] w-full h-screen left-0 top-0`}
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className={`absolute transition-all duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            >
                {children} {/* Render children elements */}
            </div>
        </div>
    );
}