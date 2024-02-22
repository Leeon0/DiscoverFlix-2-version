import { Genre } from '@/types/types'

// Use the selector to get gender names
export const getGenreNamesByIds = (state: Genre[], idArray: number[]) => {
    return idArray.map((id) => {
        const genre = state.find((genre) => genre.id === id)
        return genre
    })
}
