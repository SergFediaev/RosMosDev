import { S } from './settings.styles.ts'
import { useSelector } from 'react-redux'
import { selectLang, selectSettings } from 'src/entities/setting/model/setting.selectors.ts'
import { Language } from 'src/shared/types/language.ts'
import {
    fetchRandomWallpaper,
    setBackgroundColor,
    setBackgroundRandomGradient,
    setBackgroundType,
    setBackgroundVideo,
    setBackgroundWallpaper,
    setHasBackgroundOverlay,
    setIsDebugEnabled,
    setIsMarkupEnabled,
    setLanguage,
} from 'src/entities/setting/model/settingSlice.ts'
import { LINKS, SYMBOLS, TEXTS, VALUES } from 'src/shared/const'
import { nanoid } from '@reduxjs/toolkit'
import { SettingsHeader } from 'src/pages/settings/settingsHeader/settingsHeader.tsx'
import { Setting } from 'src/widgets/setting/setting.tsx'
import { DescriptionOption } from 'src/widgets/setting/descriptionOption/descriptionOption.tsx'
import { Select } from 'src/shared/ui/select/select.tsx'
import { Checkbox } from 'src/shared/ui/checkbox/checkbox.tsx'
import { Signature } from 'src/pages/settings/signature/signature.tsx'
import { Button } from 'src/shared/ui/button/button.tsx'
import { useState } from 'react'
import { BackgroundType } from 'src/widgets/background/types/backgroundType.types.ts'
import { BACKGROUND_TYPES } from 'src/widgets/background/const/backgroundTypes.ts'
import { BackgroundVideo } from 'src/widgets/backgroundVideo/types/backgroundVideo.types.ts'
import { BackgroundWallpaper } from 'src/widgets/backgroundWallpaper/model/backgroundWallpaper.types.ts'
import { ColorPicker } from 'src/shared/ui/colorPicker/colorPicker.tsx'
import { useAppDispatch } from 'src/app/store.ts'
import { randomGradient } from 'src/widgets/backgroundGradient/lib/randomGradient.ts'
import { ErrorMessage } from 'src/shared/ui/errorMessage/errorMessage.tsx'
import { ButtonsContainer } from 'src/shared/ui/buttonsContainer/buttonsContainer.tsx'

export const Settings = () => {
    const dispatch = useAppDispatch()
    const settings = useSelector(selectSettings)
    const lang = useSelector(selectLang)
    const [isDebugError, setIsDebugError] = useState(false)
    const [isDebugWarning, setIsDebugWarning] = useState(false)
    const debugWarningButtonName = isDebugWarning ? TEXTS[lang].HIDE_ERROR : TEXTS[lang].SHOW_ERROR

    const isBackgroundColor = settings.backgroundType.value === BACKGROUND_TYPES.COLOR
    const isBackgroundRandomGradient = settings.backgroundType.value === BACKGROUND_TYPES.RANDOM_GRADIENT
    const isBackgroundWallpaper = settings.backgroundType.value === BACKGROUND_TYPES.WALLPAPER
    const isBackgroundRandomWallpaper = settings.backgroundType.value === BACKGROUND_TYPES.RANDOM_WALLPAPER
    const isBackgroundVideo = settings.backgroundType.value === BACKGROUND_TYPES.VIDEO
    const hasBackgroundOverlay =
        settings.backgroundType.value === BACKGROUND_TYPES.WALLPAPER ||
        settings.backgroundType.value === BACKGROUND_TYPES.RANDOM_WALLPAPER ||
        settings.backgroundType.value === BACKGROUND_TYPES.VIDEO

    const onSetLanguage = (language: Language) => dispatch(setLanguage({ language }))
    const onSetIsDebugEnabled = (isDebugEnabled: boolean) => dispatch(setIsDebugEnabled({ isDebugEnabled }))
    const onSetIsMarkupEnabled = (isMarkupEnabled: boolean) => dispatch(setIsMarkupEnabled({ isMarkupEnabled }))
    const onSetBackgroundType = (backgroundType: BackgroundType) => dispatch(setBackgroundType({ backgroundType }))
    const onSetBackgroundColor = (backgroundColor: string) => dispatch(setBackgroundColor({ backgroundColor }))
    const onSetBackgroundRandomGradient = () =>
        dispatch(setBackgroundRandomGradient({ backgroundRandomGradient: randomGradient() }))
    const onSetBackgroundWallpaper = (backgroundWallpaper: BackgroundWallpaper) =>
        dispatch(setBackgroundWallpaper({ backgroundWallpaper }))
    const onFetchRandomWallpaper = () => dispatch(fetchRandomWallpaper(lang))
    const onSetBackgroundVideo = (backgroundVideo: BackgroundVideo) => dispatch(setBackgroundVideo({ backgroundVideo }))
    const onSetHasBackgroundOverlay = (hasBackgroundOverlay: boolean) =>
        dispatch(setHasBackgroundOverlay({ hasBackgroundOverlay }))
    const onDebugError = () => setIsDebugError(true)
    const toggleDebugWarning = () => setIsDebugWarning(!isDebugWarning)

    if (isDebugError) throw Error(`${TEXTS[lang].DEBUG_ERROR} ${nanoid()}`)

    return (
        <>
            <SettingsHeader />
            <S.Settings>
                <Setting name={TEXTS[lang].APP}>
                    <DescriptionOption description={TEXTS[lang].LANGUAGE}>
                        <Select
                            options={settings.languages}
                            selectedOption={settings.language.label}
                            onSelect={onSetLanguage}
                        />
                    </DescriptionOption>
                    <DescriptionOption description={TEXTS[lang].DEBUG_MODE}>
                        <Checkbox value={settings.isDebugEnabled} onChange={onSetIsDebugEnabled} />
                    </DescriptionOption>
                </Setting>
                <Setting name={TEXTS[lang].BACKGROUND}>
                    <DescriptionOption description={TEXTS[lang].TYPE}>
                        <Select
                            options={settings.backgroundTypes}
                            selectedOption={settings.backgroundType.label}
                            onSelect={onSetBackgroundType}
                        />
                    </DescriptionOption>
                    {isBackgroundColor && (
                        <DescriptionOption description={TEXTS[lang].COLOR}>
                            <ColorPicker value={settings.backgroundColor} onChange={onSetBackgroundColor} />
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
                                options={settings.backgroundWallpapers}
                                selectedOption={settings.backgroundWallpaper.label}
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
                                isLoading={settings.isLoading}
                            />
                            {settings.error && <ErrorMessage>{settings.error}</ErrorMessage>}
                        </>
                    )}
                    {isBackgroundVideo && (
                        <DescriptionOption description={TEXTS[lang].VIDEOS}>
                            <Select
                                options={settings.backgroundVideos}
                                selectedOption={settings.backgroundVideo.label}
                                onSelect={onSetBackgroundVideo}
                            />
                        </DescriptionOption>
                    )}
                    {hasBackgroundOverlay && (
                        <DescriptionOption description={TEXTS[lang].OVERLAY}>
                            <Checkbox value={settings.hasBackgroundOverlay} onChange={onSetHasBackgroundOverlay} />
                        </DescriptionOption>
                    )}
                </Setting>
                <Setting name={TEXTS[lang].INFO}>
                    <p>{TEXTS[lang].APP_DESCRIPTION}</p>
                    <p lang={lang}>
                        <q>{TEXTS[lang].APP_SLOGAN}</q>
                    </p>
                    <p>
                        {TEXTS[lang].VERSION} {VALUES.VERSION}
                    </p>
                    <p>
                        {TEXTS[lang].BUILD} {VALUES.BUILD}
                    </p>
                    <p>
                        {TEXTS[lang].GITHUB} <a href={LINKS.REPOSITORY.URL}>{LINKS.REPOSITORY.LABEL}</a>
                    </p>
                    <Signature lang={lang} />
                    <em>{TEXTS[lang].DEDICATION}</em>
                </Setting>
                {settings.isDebugEnabled && (
                    <Setting name={TEXTS[lang].DEBUG}>
                        <DescriptionOption description={TEXTS[lang].DISPLAY_MARKUP}>
                            <Checkbox value={settings.isMarkupEnabled} onChange={onSetIsMarkupEnabled} />
                        </DescriptionOption>
                        <ButtonsContainer>
                            <Button align={VALUES.STRETCH} name={debugWarningButtonName} onClick={toggleDebugWarning} />
                            <Button
                                align={VALUES.STRETCH}
                                name={TEXTS[lang].THROW_ERROR}
                                onClick={onDebugError}
                                isWarning
                            />
                            {isDebugWarning && (
                                <ErrorMessage>
                                    {TEXTS[lang].DEBUG_ERROR}
                                    {SYMBOLS.SPACE}
                                    {nanoid()}
                                </ErrorMessage>
                            )}
                        </ButtonsContainer>
                    </Setting>
                )}
            </S.Settings>
        </>
    )
}
