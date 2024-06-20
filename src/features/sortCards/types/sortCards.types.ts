import { SORTS } from 'src/features/sortCards'

export type Sort = {
    label: string
    value: {
        sortBy: typeof SORTS.ALPHABET
        sortDirection: typeof SORTS.ASCENDING | typeof SORTS.DESCENDING
    }
}
