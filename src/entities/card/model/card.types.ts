import { VALUES } from 'src/shared/const'
import { Filter } from 'src/features/filterCards'

export type CardType = {
    [VALUES.CARD_ID]: string
    [VALUES.CARD_TITLE]: string
    content: string
    tags?: string
    created?: string
    updated?: string
}

export type CardsWithFilters = {
    cards: CardType[]
    filters: Filter[]
}
