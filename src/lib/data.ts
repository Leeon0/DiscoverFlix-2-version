/**
 * Array of menu items for navigation.
 */
export const menuItems = [
    {
        name: 'Home',
        ruta: '/'
    },
    {
        name: 'Series',
        ruta: '/search/tv'
    },
    {
        name: 'Films',
        ruta: '/search/movie'
    },
    {
        name: 'Originals',
        ruta: '/search/movie?filter=popular'
    },
    {
        name: 'Trends',
        ruta: '/search/tv?filter=top_rated'
    },
    {
        name: 'See more',
        ruta: '/search/movie?filter=upcoming'
    },
];

/**
 * Array of month names.
 */
export const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

/**
 * Object containing genres for movies and TV shows.
 */
export const genresPanel = {
    movie: {
        generos: [
            { id: 28, name: 'Action' },
            { id: 12, name: 'Adventure' },
            { id: 16, name: 'Animation' },
            // More genres...
        ],
    },
    tv: {
        generos: [
            { id: 10759, name: 'Action & Adventure' },
            { id: 16, name: 'Animation' },
            // More genres...
        ],
    }
}

/**
 * Object containing categories for movies and TV shows.
 */
export const categoriaPanel = {
    movie: {
        organizarPor: [
            { id: 'trending', name: 'trending' },
            { id: 'now_playing', name: 'Most searched' },
            // More categories...
        ]
    },
    tv: {
        organizarPor: [
            { id: 'trending', name: 'trending' },
            { id: 'top_rated', name: 'Best Qualified' },
            // More categories...
        ]
    }
}
