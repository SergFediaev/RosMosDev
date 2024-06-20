import { TEXTS, VALUES } from 'src/shared/const'
import { Filter, FILTERS } from 'src/features/filterCards'

export const defaultFilters: Filter[] = [
    {
        label: TEXTS[VALUES.EN].ALL,
        value: FILTERS.ALL,
    },
    {
        label: TEXTS[VALUES.EN].UNCATEGORIZED,
        value: FILTERS.UNCATEGORIZED,
    },
]
