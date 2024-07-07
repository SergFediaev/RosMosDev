import { SOURCES } from 'src/features/cardsSource/const/sources.ts'

export type Source = {
    label: string
    value: SheetId
}

export type SheetId = typeof SOURCES.OFFICIAL | typeof SOURCES.CUSTOM
