import { Media, OrganizadoPorMovie, OrganizadoPorTv } from '@/types/types'
import { fetchData } from '@/utils/fetchData'
import { fetchDataNoStore } from '@/utils/fetchDataNoStore'

// HOME MOVIES
export const trendingMoviesWeekly = () => {
    const path = '/trending/movie/week'
    return fetchData(path)
}

// GET MOVIE GENRES
export const movieGenresList = () => {
    const path = '/genre/movie/list'
    return fetchData(path)
}

// MOVIE CAST SECTION
export const fetchRepartoMovie = (type: string, id: string) => {
    const path = `/${type}/${id}/credits`
    return fetchDataNoStore(path)
}

// VIDEOS RECOMMENDED MOVIES
export const fetchRecomendacionMovie = (type: string, id: string) => {
    const path = `/${type}/${id}/recommendations`
    return fetchDataNoStore(path, 'language=en-US')
}

// Actor Information by Id
export const fetchActorForId = (id: string) => {
    const path = `/person/${id}`
    return fetchDataNoStore(path)
}

interface QueryProps {
    q?: string
    filter?: OrganizadoPorMovie | OrganizadoPorTv
    genre?: string
}

// Browser
export const fetchSearch = async (
    type: string,
    searchParams: QueryProps,
    page: number = 1
) => {
    const search = searchParams.q
    const filter = searchParams.filter ?? 'trending'
    const genre = searchParams.genre

    // SEARCH 
    if (search) {
        const path = `/search/${type}`

        try {
            const response = await fetchDataNoStore(
                path,
                `query=${encodeURIComponent(
                    search
                )}&include_adult=false&language=en-US`
            )

            const filteredResults = response.results.filter(
                (result: Media) =>
                    result.poster_path !== null &&
                    result.backdrop_path !== null &&
                    result.popularity > 10.0
            )

           // Updates the results in the original answer
            response.results = filteredResults

           // Return modified response
            return response
        } catch (error) {
            console.error('Error in the API call:', error)
            throw error
        }
    }

   // FILTERED
    const option =
        filter === 'trending' ? `/trending/${type}/week` : `/${type}/${filter}`
    if (!genre) {
        return fetchDataNoStore(option, `page=${page}&language=en-US`)
    }

    // Category
    return fetchDataNoStore(
        `/discover/${type}`,
        `with_genres=${genre}&language=en-US`
    )
}
