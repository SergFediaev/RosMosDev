import { VALUES } from 'src/shared/const'

export type CardType = {
    [VALUES.CARD_TITLE]: string
    content: string
    tags?: string
}
