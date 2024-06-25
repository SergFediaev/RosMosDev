import { BackgroundVideo } from 'src/widgets/backgroundVideo/ui/backgroundVideo.tsx'
import { useSelector } from 'react-redux'
import { selectBackgroundType } from 'src/widgets/background/model/background.selectors.ts'
import { BackgroundGradient } from 'src/widgets/backgroundGradient/ui/backgroundGradient.tsx'
import { BackgroundWallpaper } from 'src/widgets/backgroundWallpaper/ui/backgroundWallpaper.tsx'
import { BackgroundColor } from 'src/widgets/backgroundColor/ui/backgroundColor.tsx'
import { BACKGROUND_TYPES } from 'src/widgets/background/const/backgroundTypes.ts'

export const Background = () => {
    const backgroundType = useSelector(selectBackgroundType)

    switch (backgroundType) {
        case BACKGROUND_TYPES.COLOR:
            return <BackgroundColor />
        case BACKGROUND_TYPES.RANDOM_GRADIENT:
            // ToDo: Rename gradient component.
            return <BackgroundGradient />
        case BACKGROUND_TYPES.WALLPAPER:
            return <BackgroundWallpaper />
        case BACKGROUND_TYPES.RANDOM_WALLPAPER:
            // ToDo: Random wallpaper component.
            break
        case BACKGROUND_TYPES.VIDEO:
            return <BackgroundVideo />
    }
}
