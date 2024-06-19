import { FILTERS } from 'src/features/filterCards'

class CardFilters {
    #filters: Set<string>

    constructor() {
        this.#filters = new Set<string>([FILTERS.ALL])
    }

    get filters() {
        return Array.from([...this.#filters])
    }

    set addFilter(filter: string) {
        this.#filters.add(filter)
    }

    reset() {
        this.#filters.clear()
        this.#filters.add(FILTERS.ALL)
    }
}

let instance: CardFilters

export const cardFilters = () => (instance ? instance : (instance = new CardFilters()))
