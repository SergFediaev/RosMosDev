import { VALUES } from 'src/shared/const/values.ts'

export const PATHS = {
    ROOT: '/',
    BACK: -1,
    ERROR: '/error',
    ID: `:${VALUES.CARD_ID}`,
    CARD: '/card/',
    SETTINGS: '/settings',
} as const
