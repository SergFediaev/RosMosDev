import { BackgroundWallpaper } from 'src/widgets/backgroundWallpaper/model/backgroundWallpaper.types.ts'
import wallpaper1 from 'src/shared/assets/images/wallpaper1.jpg'
import wallpaper2 from 'src/shared/assets/images/wallpaper2.jpg'
import wallpaper3 from 'src/shared/assets/images/wallpaper3.jpg'
import wallpaper4 from 'src/shared/assets/images/wallpaper4.jpg'
import { TEXTS, VALUES } from 'src/shared/const'
import { Lang } from 'src/shared/types/language.ts'

export const getBackgroundWallpapers = (lang: Lang = VALUES.EN): BackgroundWallpaper[] => [
    {
        label: TEXTS[lang].WALLPAPER1,
        value: wallpaper1,
    },
    {
        label: TEXTS[lang].WALLPAPER2,
        value: wallpaper2,
    },
    {
        label: TEXTS[lang].WALLPAPER3,
        value: wallpaper3,
    },
    {
        label: TEXTS[lang].WALLPAPER4,
        value: wallpaper4,
    },
]
