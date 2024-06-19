import { SORTS } from 'src/features/sortCards'

export const defaultSort = {
    sortBy: SORTS.ALPHABET,
    sortDirection: SORTS.ASCENDING,
} as const
