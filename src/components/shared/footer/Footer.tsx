'use client'
import RevisaNuestroCatalogo from '@/components/home/RevisaNuestroCatalogo'
import {
    GitHub,
    Linkedin,
    Portafolio,
} from '@/components/icons/Icons'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

    useEffect(() => {
        setCurrentYear(new Date().getFullYear())
    }, [])

    return (
        <div className='bg-black'>
            <RevisaNuestroCatalogo />
            <footer className='scrollMove lg:mt-20 w-full relative bg-footerGradiant pt-8 md:pt-20'>
                <div className='max-w-6xl mx-auto mb-8 '>
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
                        <div className='px-6 md:px-10 lg:px-12'>
                            <h4 className='text-sm mb-4 uppercase'>
                                Navegation
                            </h4>
                            <ul className='text-txtGray1 text-xs flex flex-col gap-4'>
                                <li>
                                    <Link
                                        href={'/search/movie'}
                                        className='hover:text-white transition-opacity'
                                    >
                                        Explore the most popular
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href={'/search/tv'}
                                        className='hover:text-white transition-opacity'
                                    >
                                        Explore popular series
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href={'/search/movie?genre=27'}
                                        className='hover:text-white transition-opacity'
                                    >
                                       Explore genres
                                    </Link>
                                </li>

                                <li>
                                    
                                </li>
                            </ul>
                        </div>
                        <div className='px-6 md:px-10 lg:px-12'>
                            <h4 className='text-sm mb-4 uppercase'>
                                Contact me
                            </h4>
                            <ul className='text-txtGray1 text-xs flex flex-col gap-2'>
                                <li>
                                    <a
                                        className='flex items-center gap-2 hover:text-white transition-opacity'
                                        href='https://github.com/Leeon0'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <span>
                                            <GitHub />
                                        </span>
                                        <span>GitHub</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className='flex items-center gap-2 hover:text-white transition-opacity'
                                        href=''
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <span>
                                            <Portafolio />
                                        </span>
                                        <span>Portfolio</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className='flex items-center gap-2 hover:text-white transition-opacity'
                                        href='https://www.linkedin.com/in/leo-roquett-5512aa267/?originalSubdomain=pt'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <span>
                                            <Linkedin />
                                        </span>
                                        <span>Linkedin</span>
                                    </a>
                                </li>

                                <li>
                                   
                                </li>
                            </ul>
                        </div>
                        <div className='px-6 md:px-10 lg:px-12 hidden sm:block'>
                            <h4 className='text-sm mb-4 uppercase'>Discover Flix</h4>
                            <p className='text-txtGray1 text-xs leading-7'>
                            Offers entertainment
                                <br />
                                through the API
                                <br />
                                The Movie Database (TMDb).
                                <br />
                                my approach is
                                <br />
                                for the purpose of
                                <br />
                                educational and demonstrate
                                <br />
                                the capabilities of the API.
                            </p>
                        </div>
                        <div className='px-6 md:px-10 lg:px-12 hidden lg:block'>
                            <h4 className='text-sm mb-4 uppercase'></h4>
                            
                             
                            
                        </div>
                    </div>
                </div>

                <div className='max-w-6xl mx-auto px-6 md:px-10 lg:px-12'>
                    <div className='text-txtGray1 py-8 border-t-[1px] border-t-gray-700 flex justify-between'>
                        <h5 className='text-xs'>
                        Made with 💙
                            <span className='text-xs'> © {currentYear}</span>
                        </h5>
                        <h6 className='text-xs'>Leonardo Roquett</h6>
                    </div>
                </div>
            </footer>
        </div>
    )
}
