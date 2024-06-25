import { BackgroundWallpaper } from 'src/widgets/backgroundWallpaper/model/backgroundWallpaper.types.ts'
import wallpaper1 from 'src/shared/assets/images/wallpaper1.jpg'
import wallpaper2 from 'src/shared/assets/images/wallpaper2.jpg'
import wallpaper3 from 'src/shared/assets/images/wallpaper3.jpg'
import wallpaper4 from 'src/shared/assets/images/wallpaper4.jpg'
import { TEXTS, VALUES } from 'src/shared/const'

export const defaultBackgroundWallpapers: BackgroundWallpaper[] = [
    {
        label: TEXTS[VALUES.EN].WALLPAPER1,
        value: wallpaper1,
    },
    {
        label: TEXTS[VALUES.EN].WALLPAPER2,
        value: wallpaper2,
    },
    {
        label: TEXTS[VALUES.EN].WALLPAPER3,
        value: wallpaper3,
    },
    {
        label: TEXTS[VALUES.EN].WALLPAPER4,
        value: wallpaper4,
    },
]
