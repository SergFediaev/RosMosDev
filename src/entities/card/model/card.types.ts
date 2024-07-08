import { KEYS } from 'src/shared/const'
import { Filter } from 'src/features/filterCards'

// ToDo: Duplicated types (CustomCard).
export type CardType = {
    [KEYS.ID]: string
    [KEYS.TITLE]: string
    [KEYS.CONTENT]: string
    [KEYS.TAGS]?: string
    [KEYS.CREATED]?: string
    [KEYS.UPDATED]?: string
}

export type CardsWithFilters = {
    cards: CardType[]
    filters: Filter[]
}
