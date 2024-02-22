// useWindowSize.ts
/**
 * A custom React hook to track window size changes.
 */

// Import necessary modules
import { useState, useEffect } from 'react';

// Define the interface for window size
interface WindowSize {
    width: number; // Width of the window
    height: number; // Height of the window
}

/**
 * Custom React hook to track window size changes.
 * @returns An object containing the current width and height of the window.
 */
const useWindowSize = (): WindowSize => {
    // Define state to hold the window size
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: globalThis.innerWidth, // Initialize width with the current inner width of the window
        height: globalThis.innerHeight, // Initialize height with the current inner height of the window
    });

    // Effect to update window size on resize
    useEffect(() => {
        // Function to handle resize event and update window size state
        const handleResize = () => {
            setWindowSize({
                width: globalThis.innerWidth, // Update width with the new inner width of the window
                height: globalThis.innerHeight, // Update height with the new inner height of the window
            });
        };

        // Add event listener for resize event
        globalThis.addEventListener('resize', handleResize);

        // Call handleResize once to initialize window size state
        handleResize();

        // Clean up: remove event listener when component unmounts
        return () => {
            globalThis.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures that effect runs only once after initial render

    // Return the current window size
    return windowSize;
};

// Export the custom hook
export default useWindowSize;
