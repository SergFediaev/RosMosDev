import { S } from './backgroundRandomWallpaper.styles.ts'
import { useAppSelector } from 'src/app/store.ts'
import {
    selectBackgroundRandomWallpaper,
    selectHasBackgroundOverlay,
} from 'src/entities/background/model/backgroundSlice.ts'
import { BackgroundOverlay } from 'src/widgets/backgroundOverlay/backgroundOverlay.tsx'

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
