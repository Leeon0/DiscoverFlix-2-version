/**
 * Defines a Zustand store for managing trailer-related state.
 * This store manages the state for displaying a modal, storing the selected video ID,
 * and toggling a mini player for trailers.
 */

// Import necessary modules
import { create } from "zustand";

// Define the interface for the trailer-related state
interface useTrailer {
    modalIsOpen: boolean; // Indicates whether the modal for displaying trailers is open
    setModalIsOpen: (isOpen: boolean) => void; // Function to update the modalIsOpen state
    selectedVideoId: string | null; // Stores the ID of the selected video
    setSelectedVideoId: (videoId: string | null) => void; // Function to update the selectedVideoId state
    miniReproductor: boolean; // Indicates whether the mini player for trailers is active
    setMiniReproductor: (active: boolean) => void; // Function to update the miniReproductor state
}

// Create the Zustand store with initial state and updater functions
const useTrailer = create<useTrailer>((set) => ({
    modalIsOpen: false, // Initial state for modalIsOpen
    setModalIsOpen: (isOpen) => set({ modalIsOpen: isOpen }), // Function to update modalIsOpen state
    selectedVideoId: null, // Initial state for selectedVideoId
    setSelectedVideoId: (videoId) => set({ selectedVideoId: videoId }), // Function to update selectedVideoId state
    miniReproductor: false, // Initial state for miniReproductor
    setMiniReproductor: (active) => set({ miniReproductor: active }) // Function to update miniReproductor state
}));

// Export the useTrailer store
export default useTrailer;
