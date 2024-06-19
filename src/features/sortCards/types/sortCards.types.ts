import { SORTS } from 'src/features/sortCards'

export type Sort = {
    sortBy: SortBy
    sortDirection: SortDirection
}

type SortBy = typeof SORTS.ALPHABET

type SortDirection = typeof SORTS.ASCENDING | typeof SORTS.DESCENDING
