import { KEYS } from 'src/shared/const'

export type CreateCard = {
    [KEYS.TITLE]: string
    [KEYS.TAGS]: string
    [KEYS.CONTENT]: string
    [KEYS.NAME]: string
    [KEYS.EMAIL]: string
}
