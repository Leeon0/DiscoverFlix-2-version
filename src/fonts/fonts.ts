/**
 * Defines the DM Sans font with specified weights, subsets, and display options.
 */

// Import the DM Sans font from the Google Fonts API using Next.js's font loader
import { DM_Sans } from 'next/font/google';

/**
 * DM Sans font with specified weights, subsets, and display options.
 * @returns A font face declaration for DM Sans font.
 */
export const DMSans = DM_Sans({
    weight: ['300', '400', '700', '600', '800', '500'], // Weights of the font variants
    subsets: ['latin'], // Subset of characters to include in the font
    display: 'swap' // Font loading behavior: 'swap' ensures text renders with fallback fonts while DM Sans is loading
});
