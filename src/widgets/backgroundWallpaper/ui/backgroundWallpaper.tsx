import { S } from 'src/widgets/backgroundWallpaper/ui/backgroundWallpaper.styles.ts'
import { selectBackgroundWallpaper } from 'src/widgets/backgroundWallpaper/model/backgroundWallpaper.selectors.ts'
import { selectHasBackgroundOverlay } from 'src/widgets/backgroundOverlay/model/backgroundOverlay.selectors.ts'
import { BackgroundOverlay } from 'src/widgets/backgroundOverlay/ui/backgroundOverlay.tsx'
import { useAppSelector } from 'src/app/store.ts'

export const BackgroundWallpaper = () => {
    const wallpaper = useAppSelector(selectBackgroundWallpaper)
    const hasBackgroundOverlay = useAppSelector(selectHasBackgroundOverlay)

    return (
        <>
            <S.BackgroundWallpaper wallpaper={wallpaper} />
            {hasBackgroundOverlay && <BackgroundOverlay />}
        </>
    )
}
