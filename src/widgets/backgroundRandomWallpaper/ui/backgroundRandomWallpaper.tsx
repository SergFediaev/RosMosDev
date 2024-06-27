import { S } from './backgroundRandomWallpaper.styles.ts'
import { useSelector } from 'react-redux'
import { selectBackgroundRandomWallpaper } from 'src/widgets/backgroundRandomWallpaper/model/backgroundRandomWallpaper.selectors.ts'
import { selectHasBackgroundOverlay } from 'src/widgets/backgroundOverlay/model/backgroundOverlay.selectors.ts'
import { BackgroundOverlay } from 'src/widgets/backgroundOverlay/ui/backgroundOverlay.tsx'

export const BackgroundRandomWallpaper = () => {
    const randomWallpaper = useSelector(selectBackgroundRandomWallpaper)
    const hasBackgroundOverlay = useSelector(selectHasBackgroundOverlay)
    // ToDo: Check overlay on random wallpaper loading and null.

    return (
        <>
            <S.BackgroundRandomWallpaper randomWallpaper={randomWallpaper} />
            {hasBackgroundOverlay && <BackgroundOverlay />}
        </>
    )
}
