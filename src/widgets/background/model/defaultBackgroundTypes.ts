import { BackgroundType } from 'src/widgets/background/types/backgroundType.types.ts'
import { TEXTS, VALUES } from 'src/shared/const'
import { BACKGROUND_TYPES } from 'src/widgets/background/const/backgroundTypes.ts'

export const defaultBackgroundTypes: BackgroundType[] = [
    {
        label: TEXTS[VALUES.EN].COLOR,
        value: BACKGROUND_TYPES.COLOR,
    },
    {
        label: TEXTS[VALUES.EN].RANDOM_GRADIENT,
        value: BACKGROUND_TYPES.RANDOM_GRADIENT,
    },
    {
        label: TEXTS[VALUES.EN].WALLPAPER,
        value: BACKGROUND_TYPES.WALLPAPER,
    },
    {
        label: TEXTS[VALUES.EN].RANDOM_WALLPAPER,
        value: BACKGROUND_TYPES.RANDOM_WALLPAPER,
    },
    {
        label: TEXTS[VALUES.EN].VIDEO,
        value: BACKGROUND_TYPES.VIDEO,
    },
]
