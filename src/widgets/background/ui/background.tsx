import { BackgroundVideo } from 'src/widgets/backgroundVideo/ui/backgroundVideo.tsx'
import { BackgroundRandomGradient } from 'src/widgets/backgroundRandomGradient/ui/backgroundRandomGradient.tsx'
import { BackgroundWallpaper } from 'src/widgets/backgroundWallpaper/ui/backgroundWallpaper.tsx'
import { BackgroundColor } from 'src/widgets/backgroundColor/backgroundColor.tsx'
import { BACKGROUND_TYPES } from 'src/widgets/background/const/backgroundTypes.ts'
import { BackgroundRandomWallpaper } from 'src/widgets/backgroundRandomWallpaper/ui/backgroundRandomWallpaper.tsx'
import { useAppSelector } from 'src/app/store.ts'
import { selectBackgroundType } from 'src/entities/background/model/backgroundSlice.ts'

export const Background = () => {
    const backgroundType = useAppSelector(selectBackgroundType)

    switch (backgroundType.value) {
        case BACKGROUND_TYPES.COLOR:
            return <BackgroundColor />
        case BACKGROUND_TYPES.RANDOM_GRADIENT:
            // ToDo: Rename gradient component.
            return <BackgroundRandomGradient />
        case BACKGROUND_TYPES.WALLPAPER:
            return <BackgroundWallpaper />
        case BACKGROUND_TYPES.RANDOM_WALLPAPER:
            return <BackgroundRandomWallpaper />
        case BACKGROUND_TYPES.VIDEO:
            return <BackgroundVideo />
    }
}
