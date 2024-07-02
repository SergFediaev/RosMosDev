import { S } from 'src/widgets/backgroundWallpaper/ui/backgroundWallpaper.styles.ts'
import { BackgroundOverlay } from 'src/widgets/backgroundOverlay/backgroundOverlay.tsx'
import { useAppSelector } from 'src/app/store/store.ts'
import { selectBackgroundWallpaper, selectHasBackgroundOverlay } from 'src/entities/background/model/backgroundSlice.ts'

export const BackgroundWallpaper = () => {
    const wallpaper = useAppSelector(selectBackgroundWallpaper)
    const hasBackgroundOverlay = useAppSelector(selectHasBackgroundOverlay)

    return (
        <>
            <S.BackgroundWallpaper wallpaper={wallpaper.value} />
            {hasBackgroundOverlay && <BackgroundOverlay />}
        </>
    )
}
