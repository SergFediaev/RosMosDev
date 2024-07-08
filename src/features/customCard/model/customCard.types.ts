import { KEYS } from 'src/shared/const'

export type CustomCard = {
    [KEYS.ID]: string
    [KEYS.TITLE]: string
    [KEYS.CONTENT]: string
    [KEYS.TAGS]: string
    [KEYS.CREATED]: string
    [KEYS.UPDATED]: string
    [KEYS.NAME]: string
    [KEYS.EMAIL]: string
}

export type DraftCard = Omit<CustomCard, typeof KEYS.ID | typeof KEYS.CREATED | typeof KEYS.UPDATED>
