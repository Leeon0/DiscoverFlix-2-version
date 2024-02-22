'use client'
import { useParams } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Media } from '../../types/types'
import Link from 'next/link'
import MovieCard from '../UI/card/MovieCard'
export default function ScrollInfinity({ totalPages }: { totalPages: number }) {
    const DEFAULT_PAGE = 2
const DEFAULT_FILTER = 'trending'


    const [mediaMovieorSeries, setMediaMovieorSeries] = useState<Media[]>([]) // data storage status
    const [page, setPage] = useState(DEFAULT_PAGE) // page numbers

    // this checks if the user has reached the end and makes a new request for scroll infinity
    const loadingRef = useRef<HTMLDivElement>(null)

    const { searchType }: { searchType: string } = useParams() // type => movie or tv

    // input user
    const searchParams = useSearchParams()
    const search = searchParams.get('q') // q => query
    const filter = searchParams.get('filter') || DEFAULT_FILTER
    const genre = searchParams.get('genre')

    const fetchApiData = useCallback(
        async (url: string) => {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`Error en la petición: ${response.statusText}`)
            }
            const data = await response.json()
            const results = data.results
            setMediaMovieorSeries((prevData) => [...prevData, ...results])
            setPage((prevPage) => prevPage + 1)
        },
        [setMediaMovieorSeries, setPage]
    )

    // petition for loadMore
    const fetchDataPage = useCallback(async () => {
        if (page >= totalPages) return

        const url = search
            ? `/api/search?q=${search}&type=${searchType}&page=${page}`
            : genre
            ? `/api/search?type=${searchType}&page=${page}&genre=${genre}`
            : `/api/search?type=${searchType}&page=${page}&filter=${filter}`

        try {
            await fetchApiData(url)
        } catch (error) {
            console.error('Error en fetchDataPage:', error)
        }
    }, [page, search, searchType, genre, filter, totalPages, fetchApiData])

    useEffect(() => {
        const currentRef = loadingRef.current
        if (!currentRef) return

        const loadingObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    return fetchDataPage()
                }
            },
            { rootMargin: '100px' }
        )

        loadingObserver.observe(currentRef)

        // Stores the current reference in a local variable
        return () => {
            if (currentRef) {
                loadingObserver.unobserve(currentRef)
            }
        }
    }, [mediaMovieorSeries, fetchDataPage])

    // If the query or user search changes we empty the states
    useEffect(() => {
        setMediaMovieorSeries([])
        setPage(2)
    }, [search, filter, genre])

    const uniqueIds = new Set()
 // Filter data by unique id
    const dataNoRepeat = mediaMovieorSeries.filter((media) => {
        if (!uniqueIds.has(media.id)) {
            uniqueIds.add(media.id)
            return true
        }
        return false
    })

    return (
        <>
            {mediaMovieorSeries.length > 0 &&
                dataNoRepeat.map(({ id, ...media }) => (
                    <Link href={`/media/${id}-${searchType}`} key={id}>
                        <MovieCard animate={true} result={media} />
                    </Link>
                ))}
            {page <= totalPages && (
                <div ref={loadingRef}>
                    {page >= totalPages ? '' : 'Loading...'}
                </div>
            )}
        </>
    )
}

