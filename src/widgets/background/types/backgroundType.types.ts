import { BACKGROUND_TYPES } from 'src/widgets/background/const/backgroundTypes.ts'

export type BackgroundType = {
    label: string
    value:
        | typeof BACKGROUND_TYPES.COLOR
        | typeof BACKGROUND_TYPES.RANDOM_GRADIENT
        | typeof BACKGROUND_TYPES.WALLPAPER
        | typeof BACKGROUND_TYPES.RANDOM_WALLPAPER
        | typeof BACKGROUND_TYPES.VIDEO
}
