import { S } from 'src/widgets/backgroundWallpaper/ui/backgroundWallpaper.styles.ts'
import { useSelector } from 'react-redux'
import { selectBackgroundWallpaper } from 'src/widgets/backgroundWallpaper/model/backgroundWallpaper.selectors.ts'
import { selectHasBackgroundOverlay } from 'src/widgets/backgroundOverlay/model/backgroundOverlay.selectors.ts'
import { BackgroundOverlay } from 'src/widgets/backgroundOverlay/ui/backgroundOverlay.tsx'

export const BackgroundWallpaper = () => {
    const wallpaper = useSelector(selectBackgroundWallpaper)
    const hasBackgroundOverlay = useSelector(selectHasBackgroundOverlay)

    return (
        <>
            <S.BackgroundWallpaper wallpaper={wallpaper} />
            {hasBackgroundOverlay && <BackgroundOverlay />}
        </>
    )
}
