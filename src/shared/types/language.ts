import { VALUES } from 'src/shared/const'

export type Language = {
    label: string
    value: Lang
}

export type Lang = typeof VALUES.EN | typeof VALUES.RU
