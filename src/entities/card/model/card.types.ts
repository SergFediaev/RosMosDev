import { KEYS } from 'src/shared/const'
import { Filter } from 'src/features/filterCards'

export type CardType = {
    [KEYS.ID]: string
    [KEYS.TITLE]: string
    content: string
    tags?: string
    created?: string
    updated?: string
}

export type CardsWithFilters = {
    cards: CardType[]
    filters: Filter[]
}
