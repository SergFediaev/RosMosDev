import { KEYS } from 'src/shared/const'
import { Filter } from 'src/features/filterCards'

export type CardType = {
    [KEYS.ID]: string
    [KEYS.TITLE]: string
    [KEYS.CONTENT]: string
    [KEYS.TAGS]?: string
    [KEYS.CREATED]?: string
    [KEYS.UPDATED]?: string
    [KEYS.NAME]?: string
    [KEYS.EMAIL]?: string
}

export type CustomCard = Required<CardType>

export type DraftCard = Omit<CustomCard, typeof KEYS.ID | typeof KEYS.CREATED | typeof KEYS.UPDATED>

export type CardsWithFilters = {
    cards: CardType[]
    filters: Filter[]
}
