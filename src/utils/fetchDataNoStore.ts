'use server'
/*
export async function fetchDataNoStore(
    path: string,
    query: string = 'language=eng-US'
) {
    try {
        const requestOptions: RequestInit = {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjAxYTVhNWQzNTYyMzUzMTg3OTUyNzE1MmQzMDAwOSIsInN1YiI6IjY1ZDNjYTgzNDE0MjkxMDE3Y2ExNTA5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._PzHTuMMKyc9il_o006fuCwI6GHGVNfnL3EYknI-EPo}`,
            },
            cache: 'no-store',
        }
        const response = await fetch(
            `https://api.themoviedb.org/3${path}?${query}`,
            requestOptions
        )

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`) 
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
    
}
*/
export async function fetchDataNoStore(
    path: string,
    query: string = 'language=en-US'
): Promise<any> {
    try {
        // Set up request options including headers and cache control.
        const requestOptions: RequestInit = {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjAxYTVhNWQzNTYyMzUzMTg3OTUyNzE1MmQzMDAwOSIsInN1YiI6IjY1ZDNjYTgzNDE0MjkxMDE3Y2ExNTA5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._PzHTuMMKyc9il_o006fuCwI6GHGVNfnL3EYknI-EPo`,
            },
            cache: 'no-store', // Set cache mode to 'no-store' to prevent storing the response.
        };

        // Fetch data from the specified API endpoint.
        const response = await fetch(
            `https://api.themoviedb.org/3${path}?${query}`,
            requestOptions
        );

        // Throw an error if the response status is not ok.
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        // Parse and return the fetched data.
        const data = await response.json();
        return data;
    } catch (error) {
        // Log and rethrow any errors that occur during the fetch operation.
        console.error('Error fetching data:', error);
        throw error;
    }
}
