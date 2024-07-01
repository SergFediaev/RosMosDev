import { S } from './backgroundRandomWallpaper.styles.ts'
import { selectBackgroundRandomWallpaper } from 'src/widgets/backgroundRandomWallpaper/model/backgroundRandomWallpaper.selectors.ts'
import { selectHasBackgroundOverlay } from 'src/widgets/backgroundOverlay/model/backgroundOverlay.selectors.ts'
import { BackgroundOverlay } from 'src/widgets/backgroundOverlay/ui/backgroundOverlay.tsx'
import { useAppSelector } from 'src/app/store.ts'

export const BackgroundRandomWallpaper = () => {
    const randomWallpaper = useAppSelector(selectBackgroundRandomWallpaper)
    const hasBackgroundOverlay = useAppSelector(selectHasBackgroundOverlay)
    // ToDo: Check overlay on random wallpaper loading and null.

    return (
        <>
            <S.BackgroundRandomWallpaper randomWallpaper={randomWallpaper} />
            {hasBackgroundOverlay && <BackgroundOverlay />}
        </>
    )
}
