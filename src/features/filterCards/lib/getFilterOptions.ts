import { Options } from 'src/shared/ui/select/select.tsx'
import { Lang } from 'src/shared/types/lang.ts'
import { FILTERS } from 'src/features/filterCards'
import { TEXTS } from 'src/shared/const'

export const getFilterOptions = (filters: string[], lang: Lang): Options<string> =>
    filters.map(filter => {
        let label = filter
        if (filter === FILTERS.ALL) label = TEXTS[lang].ALL
        if (filter === FILTERS.UNCATEGORIZED) label = TEXTS[lang].UNCATEGORIZED

        return { label, value: filter }
    })
