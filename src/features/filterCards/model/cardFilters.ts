import { Filter, FILTERS } from 'src/features/filterCards'
import { TEXTS } from 'src/shared/const'
import { Lang } from 'src/shared/types/language.ts'
import { CardType } from 'src/entities/card'

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

    getFilters(lang: Lang, cards: CardType[]): Filter[] {
        return [...this.#filters].map(filter => {
            let label = filter
            const value = filter.toLowerCase()

            switch (filter) {
                case FILTERS.ALL:
                    label = `${TEXTS[lang].ALL} (${cards.length})`
                    break
                case FILTERS.UNCATEGORIZED:
                    label = `${TEXTS[lang].UNCATEGORIZED} (${cards.filter(({ tags }) => !tags).length})`
                    break
                default:
                    label = `${label} (${cards.filter(({ tags }) => tags?.toLowerCase().includes(value)).length})`
            }

            return { label, value }
        })
    }

    reset() {
        this.#filters.clear()
        this.#filters.add(FILTERS.ALL)
    }
}

let instance: CardFilters

export const cardFilters = () => (instance ? instance : (instance = new CardFilters()))
