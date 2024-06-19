import { FILTERS } from 'src/features/filterCards'

export const cardFilters = {
    _filters: new Set<string>([FILTERS.ALL]),
    getFilters() {
        return Array.from([...this._filters])
    },
    addFilter(filter: string) {
        this._filters.add(filter)
    },
} as const
