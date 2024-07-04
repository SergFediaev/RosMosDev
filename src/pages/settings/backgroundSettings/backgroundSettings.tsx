import { Setting } from 'src/widgets/setting/setting.tsx'
import { TEXTS, VALUES } from 'src/shared/const'
import { DescriptionOption } from 'src/widgets/setting/descriptionOption/descriptionOption.tsx'
import { Select } from 'src/shared/ui/select/select.tsx'
import { ColorPicker } from 'src/shared/ui/colorPicker/colorPicker.tsx'
import { Button } from 'src/shared/ui/button/button.tsx'
import { ErrorMessage } from 'src/shared/ui/errorMessage/errorMessage.tsx'
import { Checkbox } from 'src/shared/ui/checkbox/checkbox.tsx'
import { BackgroundType } from 'src/widgets/background/types/backgroundType.types.ts'
import { randomGradient } from 'src/widgets/backgroundRandomGradient/lib/randomGradient.ts'
import { BackgroundWallpaper } from 'src/widgets/backgroundWallpaper/model/backgroundWallpaper.types.ts'
import { BackgroundVideo } from 'src/widgets/backgroundVideo/types/backgroundVideo.types.ts'
import { useAppDispatch, useAppSelector } from 'src/app/store/store.ts'
import {
    fetchRandomWallpaper,
    selectBackgroundColor,
    selectBackgroundError,
    selectBackgroundType,
    selectBackgroundTypes,
    selectBackgroundVideo,
    selectBackgroundVideos,
    selectBackgroundWallpaper,
    selectBackgroundWallpapers,
    selectHasBackgroundOverlay,
    selectIsBackgroundLoading,
    setBackgroundColor,
    setBackgroundRandomGradient,
    setBackgroundType,
    setBackgroundVideo,
    setBackgroundWallpaper,
    setHasBackgroundOverlay,
} from 'src/entities/background/model/backgroundSlice.ts'
import { BACKGROUND_TYPES } from 'src/widgets/background/const/backgroundTypes.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'

export const BackgroundSettings = () => {
    const lang = useAppSelector(selectLang)
    const dispatch = useAppDispatch()

    const backgroundType = useAppSelector(selectBackgroundType)
    const backgroundTypes = useAppSelector(selectBackgroundTypes)
    const backgroundColor = useAppSelector(selectBackgroundColor)
    const backgroundWallpaper = useAppSelector(selectBackgroundWallpaper)
    const backgroundWallpapers = useAppSelector(selectBackgroundWallpapers)
    const backgroundVideo = useAppSelector(selectBackgroundVideo)
    const backgroundVideos = useAppSelector(selectBackgroundVideos)
    const hasBackgroundOverlay = useAppSelector(selectHasBackgroundOverlay)
    const isBackgroundLoading = useAppSelector(selectIsBackgroundLoading)
    const backgroundError = useAppSelector(selectBackgroundError)

    const isBackgroundColor = backgroundType.value === BACKGROUND_TYPES.COLOR
    const isBackgroundRandomGradient = backgroundType.value === BACKGROUND_TYPES.RANDOM_GRADIENT
    const isBackgroundWallpaper = backgroundType.value === BACKGROUND_TYPES.WALLPAPER
    const isBackgroundRandomWallpaper = backgroundType.value === BACKGROUND_TYPES.RANDOM_WALLPAPER
    const isBackgroundVideo = backgroundType.value === BACKGROUND_TYPES.VIDEO
    const isBackgroundOverlayAvailable =
        backgroundType.value === BACKGROUND_TYPES.WALLPAPER ||
        backgroundType.value === BACKGROUND_TYPES.RANDOM_WALLPAPER ||
        backgroundType.value === BACKGROUND_TYPES.VIDEO

    const onSetBackgroundType = (backgroundType: BackgroundType) => dispatch(setBackgroundType({ backgroundType }))
    const onSetBackgroundColor = (backgroundColor: string) => dispatch(setBackgroundColor({ backgroundColor }))
    const onSetBackgroundRandomGradient = () =>
        dispatch(setBackgroundRandomGradient({ backgroundRandomGradient: randomGradient() }))
    const onSetBackgroundWallpaper = (backgroundWallpaper: BackgroundWallpaper) =>
        dispatch(setBackgroundWallpaper({ backgroundWallpaper }))
    const onFetchRandomWallpaper = () => dispatch(fetchRandomWallpaper(lang))
    const onSetBackgroundVideo = (backgroundVideo: BackgroundVideo) => dispatch(setBackgroundVideo({ backgroundVideo }))
    const toggleHasBackgroundOverlay = () =>
        dispatch(setHasBackgroundOverlay({ hasBackgroundOverlay: !hasBackgroundOverlay }))

    return (
        <Setting name={TEXTS[lang].BACKGROUND}>
            <DescriptionOption description={TEXTS[lang].TYPE}>
                <Select
                    options={backgroundTypes}
                    selectedOption={backgroundType.label}
                    onSelect={onSetBackgroundType}
                />
            </DescriptionOption>
            {isBackgroundColor && (
                <DescriptionOption description={TEXTS[lang].COLOR}>
                    <ColorPicker value={backgroundColor} onChange={onSetBackgroundColor} />
                </DescriptionOption>
            )}
            {isBackgroundRandomGradient && (
                <Button
                    name={TEXTS[lang].NEW_RANDOM_GRADIENT}
                    onClick={onSetBackgroundRandomGradient}
                    align={VALUES.STRETCH}
                />
            )}
            {isBackgroundWallpaper && (
                <DescriptionOption description={TEXTS[lang].WALLPAPERS}>
                    <Select
                        options={backgroundWallpapers}
                        selectedOption={backgroundWallpaper.label}
                        onSelect={onSetBackgroundWallpaper}
                    />
                </DescriptionOption>
            )}
            {isBackgroundRandomWallpaper && (
                <>
                    <Button
                        name={TEXTS[lang].LOAD_RANDOM_WALLPAPER}
                        onClick={onFetchRandomWallpaper}
                        align={VALUES.STRETCH}
                        isLoading={isBackgroundLoading}
                    />
                    {!isBackgroundLoading && backgroundError && <ErrorMessage error={backgroundError} />}
                </>
            )}
            {isBackgroundVideo && (
                <DescriptionOption description={TEXTS[lang].VIDEOS}>
                    <Select
                        options={backgroundVideos}
                        selectedOption={backgroundVideo.label}
                        onSelect={onSetBackgroundVideo}
                    />
                </DescriptionOption>
            )}
            {isBackgroundOverlayAvailable && (
                <DescriptionOption description={TEXTS[lang].OVERLAY}>
                    <Checkbox value={hasBackgroundOverlay} onChange={toggleHasBackgroundOverlay} />
                </DescriptionOption>
            )}
        </Setting>
    )
}
