'use client'
import type { Media, ProductionCompany, ProductionCountry } from '@/types/types'
import { useEffect, useRef, useState } from 'react'
import TitleProducction from './TitleProducction'

export default function DetallesProduccion({ data }: { data: Media }) {
    // Calculating revenue and investment
    const ganancias = data.revenue;
    const inversion = data.budget;

    // Ref to track visibility of the article element
    const articleRef = useRef(null);
    const [isArticleVisible, setArticleVisible] = useState(false);

    // Effect to observe intersection of the article element with viewport
    useEffect(() => {
        const options = {
            threshold: 0,
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setArticleVisible(true);
                } else {
                    // Reset state when element goes out of viewport
                    setArticleVisible(false);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (articleRef.current) {
            observer.observe(articleRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <article className='md:px-16 lg:px-0 h-full max-w-[1770px] mx-auto'>
            <div
                ref={articleRef}
                className='mx-auto max-w-[1200px] my-10 flex flex-col md:flex-row md:flex-wrap lg:justify-between gap-10'
            >
                {/* Production Companies */}
                <div className={isArticleVisible ? 'animate-fadeInUp' : ''}>
                    <TitleProducction>Production Companies</TitleProducction>
                    <ul className='text-xs lg:text-sm flex flex-col gap-1 text-txtGray2'>
                        {data.production_companies.map(
                            (company: ProductionCompany) => (
                                <li key={company.id}>{company.name}</li>
                            )
                        )}
                    </ul>
                </div>
                {/* Countries of Production */}
                <div className={isArticleVisible ? 'animate-fadeInUp' : ''}>
                    <TitleProducction>Countries of Production</TitleProducction>
                    <ul className='text-sm flex flex-col gap-1 text-txtGray2'>
                        {data.production_countries.map(
                            (country: ProductionCountry) => (
                                <li key={country.iso_3166_1}>{country.name}</li>
                            )
                        )}
                    </ul>
                </div>
                {/* Revenues Generated */}
                <div className={isArticleVisible ? 'animate-fadeInUp' : ''}>
                    <TitleProducction>Revenues Generated</TitleProducction>
                    <span className='text-sm text-txtGray2'>
                        {ganancias
                            ? `$${ganancias}`
                            : 'No information at this time'}
                    </span>
                </div>
                {/* Investment */}
                <div className={isArticleVisible ? 'animate-fadeInUp' : ''}>
                    <TitleProducction>Investment</TitleProducction>
                    <span className='text-sm text-txtGray2'>
                        {inversion
                            ? `$${inversion}`
                            : 'No information at this time'}
                    </span>
                </div>
            </div>
        </article>
    );
}