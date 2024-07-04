import { KEYS } from 'src/shared/const/keys.ts'

export const PATHS = {
    ROOT: '/',
    BACK: -1,
    ERROR: '/error',
    ID: `:${KEYS.ID}`,
    CARD: '/card/',
    SETTINGS: '/settings',
} as const
