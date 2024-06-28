import { BackgroundType } from 'src/widgets/background/types/backgroundType.types.ts'
import { TEXTS, VALUES } from 'src/shared/const'
import { BACKGROUND_TYPES } from 'src/widgets/background/const/backgroundTypes.ts'
import { Lang } from 'src/shared/types/language.ts'

export const getBackgroundTypes = (lang: Lang = VALUES.EN): BackgroundType[] => [
    {
        label: TEXTS[lang].COLOR,
        value: BACKGROUND_TYPES.COLOR,
    },
    {
        label: TEXTS[lang].RANDOM_GRADIENT,
        value: BACKGROUND_TYPES.RANDOM_GRADIENT,
    },
    {
        label: TEXTS[lang].WALLPAPER,
        value: BACKGROUND_TYPES.WALLPAPER,
    },
    {
        label: TEXTS[lang].RANDOM_WALLPAPER,
        value: BACKGROUND_TYPES.RANDOM_WALLPAPER,
    },
    {
        label: TEXTS[lang].VIDEO,
        value: BACKGROUND_TYPES.VIDEO,
    },
]
