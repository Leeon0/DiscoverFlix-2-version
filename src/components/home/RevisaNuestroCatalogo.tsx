import Link from 'next/link'
import Image from 'next/image'
import '@/styles/scrollAnimate.css'

export default function RevisaNuestroCatalogo() {
    return (
        <section className='py-14 sm:pt-20 RevisaTodoNuestroCatalogo relative w-full grid place-content-center bg-black'>
            <div className='flex flex-col gap-8 items-center'>
                {/* Title */}
                <h3 className='font-semibold  lg:text-xl text-center'>
                    Still looking for something to see?
                    <br />
                    Check out our entire catalog
                </h3>
                {/* Link to view all */}
                <Link
                    href='/search/movie' // URL the link points to
                    className='border-solid border-[1px] text-[#0891B2] border-white/30 rounded-lg px-4 py-2 font-semibold text-sm hover:scale-110 hover:text-[#08a4b2] transition duration-300'
                >
                   VIEW ALL
                </Link>
            </div>
        </section>
    );
}