'use client'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import MenuItem from './MenuItem' // componentes
import { CloseIcon, ArrowRight, MenuIcon } from '@/icons/Icons' // icons
import { menuItems } from '@/lib/data' // data
import Link from 'next/link'

export default function MenuFunction({
    children,
}: {
    children: React.ReactNode; // Content of the menu
}) {
    // State to manage menu open/close
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // CSS classes for menu container
    const menuContainerClasses = clsx(
        'text-white/60 transition-all duration-300 z-50 fixed right-0 top-0 w-64 min-h-screen bg-black px-5',
        {
            'opacity-100': isMenuOpen, // Show menu if open
            'translate-x-full opacity-0': !isMenuOpen, // Hide menu if closed
        }
    );

    // CSS classes for overlay
    const overlayClasses = clsx(
        'fixed overflow-hidden w-full right-0 top-0 min-h-screen bg-black opacity-40',
        { hidden: !isMenuOpen } // Hide overlay if menu is closed
    );

    // Function to toggle menu open/close state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Effect to handle body overflow based on menu open/close state
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling when menu is open
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling when menu is closed
        }

        // Cleanup function to reset body overflow to auto
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]); // Dependency array to run effect only when isMenuOpen changes

    return (
        <>
            {/* Button to toggle menu */}
            <button
                onClick={toggleMenu} // Click event handler to toggle menu
                className='w-6 h-6' // Button styling
                aria-label='Open Menu' // Accessible label
            >
                <MenuIcon /> {/* Menu icon */}
            </button>
            {/* Menu container */}
            <aside className={menuContainerClasses}>
                {/* Close button */}
                <div className='h-16 flex items-center justify-end'>
                    <button
                        className='w-6 h-6' // Button styling
                        onClick={toggleMenu} // Click event handler to close menu
                        aria-label='Close Menu' // Accessible label
                    >
                        <CloseIcon /> {/* Close icon */}
                    </button>
                </div>
                {/* Menu items */}
                <ul className='flex flex-col gap-5 font-normal mb-3'>
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.ruta}>
                                <MenuItem item={item.name} /> {/* Menu item */}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* Additional content */}
                <div className='flex flex-col gap-4 mt-8'>
                    {/* Divider */}
                    <span className='w-full h-[1px] bg-white/30' />
                    {/* Link to upcoming releases */}
                    <Link
                        href='/search/movie?filter=upcoming'
                        className='flex justify-between items-center'
                    >
                        <MenuItem item='Upcoming releases' /> {/* Menu item */}
                        <ArrowRight /> {/* Arrow icon */}
                    </Link>
                    {/* Divider */}
                    <span className='w-full h-[1px] bg-white/30' />
                    {/* Additional children content */}
                    <div className='my-4'>{children}</div>
                </div>
            </aside>
            {/* Overlay to cover the screen when menu is open */}
            <div onClick={toggleMenu} className={overlayClasses} />
        </>
    );
}