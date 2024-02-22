import { Media } from '@/types/types'
import { fetchDataNoStore } from '@/utils/fetchDataNoStore'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<NextResponse> {
    // Extracting search parameters from the request URL
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');
    const type = searchParams.get('type');
    const genre = searchParams.get('genre');
    const page = searchParams.get('page');
    const filter = searchParams.get('filter');

    // Search
    if (query) {
        const path = `/search/${type}`;
        const busqueda = `query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=${page}`;

        // Fetching data without storing
        const data = await fetchDataNoStore(path, busqueda);

        // Filtering the results based on conditions
        const filterData = data.results.filter((result: Media) =>
            result.poster_path !== null &&
            result.backdrop_path !== null &&
            result.popularity > 10.0
        );

        // Returning the filtered data as JSON response
        return NextResponse.json({ ...data, results: filterData });
    }

    // Filtering
    if (!genre) {
        const option = filter === 'trending' ? `/trending/${type}/week` : `/${type}/${filter}`;

        // Fetching data without storing
        const data = await fetchDataNoStore(option, `page=${page}&language=en-US`);

        // Returning the fetched data as JSON response
        return NextResponse.json(data);
    }

    // Category
    // Fetching data without storing
    const data = await fetchDataNoStore(`/discover/${type}`, `with_genres=${genre}&page=${page}&language=en-US`);

    // Returning the fetched data as JSON response
    return NextResponse.json(data);
}