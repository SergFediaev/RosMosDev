import { Filter, FILTERS } from 'src/features/filterCards'
import { TEXTS } from 'src/shared/const'
import { Lang } from 'src/shared/types/lang.ts'

export class CardFilters {
    #filters: Set<string>

    constructor() {
        this.#filters = new Set<string>([FILTERS.ALL])
    }

    get count() {
        return this.#filters.size
    }

    set addFilter(filter: string) {
        this.#filters.add(filter)
    }

    getFilters(lang: Lang): Filter[] {
        return [...this.#filters].map(filter => {
            let label = filter
            if (filter === FILTERS.ALL) label = TEXTS[lang].ALL
            if (filter === FILTERS.UNCATEGORIZED) label = TEXTS[lang].UNCATEGORIZED

            return { label, value: filter.toLowerCase() }
        })
    }

    reset() {
        this.#filters.clear()
        this.#filters.add(FILTERS.ALL)
    }
}

let instance: CardFilters

export const cardFilters = () => (instance ? instance : (instance = new CardFilters()))
