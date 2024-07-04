import { S } from './settings.styles.ts'
import { Language } from 'src/shared/types/language.ts'
import {
    restoreDefaultSettings,
    selectIsDebugEnabled,
    selectIsMarkupEnabled,
    selectLang,
    selectLanguage,
    selectLanguages,
    selectShowConnectionAlways,
    setIsDebugEnabled,
    setIsMarkupEnabled,
    setLanguage,
    setShowConnectionAlways,
} from 'src/entities/setting/model/settingSlice.ts'
import { LINKS, SYMBOLS, TEXTS, VALUES } from 'src/shared/const'
import { nanoid } from '@reduxjs/toolkit'
import { Setting } from 'src/widgets/setting/setting.tsx'
import { DescriptionOption } from 'src/widgets/setting/descriptionOption/descriptionOption.tsx'
import { Select } from 'src/shared/ui/select/select.tsx'
import { Checkbox } from 'src/shared/ui/checkbox/checkbox.tsx'
import { Signature } from 'src/pages/settings/signature/signature.tsx'
import { Button } from 'src/shared/ui/button/button.tsx'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'src/app/store/store.ts'
import { ErrorMessage } from 'src/shared/ui/errorMessage/errorMessage.tsx'
import { ButtonsContainer } from 'src/shared/ui/buttonsContainer/buttonsContainer.tsx'
import {
    selectShowCardDate,
    selectShowCardId,
    selectShowCardTags,
    setShowDate,
    setShowId,
    setShowTags,
} from 'src/entities/card'
import { Header } from 'src/widgets/header/header.tsx'
import { OpenCardsIconButton } from 'src/widgets/openCardsIconButton/openCardsIconButton.tsx'
import { NavIcons } from 'src/widgets/header/navIcons/navIcons.tsx'
import { BackgroundSettings } from 'src/pages/settings/backgroundSettings/backgroundSettings.tsx'
import { clearLocalStorage } from 'src/shared/lib/localStorage.ts'
import { clearSessionStorage } from 'src/shared/lib/sessionStorage.ts'

export const Settings = () => {
    const lang = useAppSelector(selectLang)
    const dispatch = useAppDispatch()

    const language = useAppSelector(selectLanguage)
    const languages = useAppSelector(selectLanguages)
    const showConnectionAlways = useAppSelector(selectShowConnectionAlways)
    const isDebugEnabled = useAppSelector(selectIsDebugEnabled)
    const isMarkupEnabled = useAppSelector(selectIsMarkupEnabled)

    const showCardTags = useAppSelector(selectShowCardTags)
    const showCardId = useAppSelector(selectShowCardId)
    const showCardDate = useAppSelector(selectShowCardDate)

    const [isDebugError, setIsDebugError] = useState(false)
    const [isDebugWarning, setIsDebugWarning] = useState(false)
    const debugWarningButtonName = isDebugWarning ? TEXTS[lang].HIDE_ERROR : TEXTS[lang].SHOW_ERROR

    const onSetLanguage = (language: Language) => dispatch(setLanguage({ language }))
    // ToDo: Card tags, filters, categories.
    const toggleShowCardTags = () => dispatch(setShowTags({ showTags: !showCardTags }))
    const toggleShowCardId = () => dispatch(setShowId({ showId: !showCardId }))
    const toggleShowCardDate = () => dispatch(setShowDate({ showDate: !showCardDate }))
    const toggleShowConnectionAlways = () =>
        dispatch(setShowConnectionAlways({ showConnectionAlways: !showConnectionAlways }))
    const toggleIsDebugEnabled = () => dispatch(setIsDebugEnabled({ isDebugEnabled: !isDebugEnabled }))
    const toggleIsMarkupEnabled = () => dispatch(setIsMarkupEnabled({ isMarkupEnabled: !isMarkupEnabled }))
    const onRestoreDefaultSettings = () => dispatch(restoreDefaultSettings())

    const onDebugError = () => setIsDebugError(true)
    const toggleDebugWarning = () => setIsDebugWarning(!isDebugWarning)

    if (isDebugError) throw Error(`${TEXTS[lang].DEBUG_ERROR} ${nanoid()}`)

    return (
        <>
            <Header>
                {/* ToDo: Shared component for header h1 */}
                <h1>
                    {TEXTS[lang].APP_NAME} {SYMBOLS.SLASH} {TEXTS[lang].SETTINGS}
                </h1>
                <NavIcons>
                    <OpenCardsIconButton />
                </NavIcons>
            </Header>
            <S.Settings>
                <Setting name={TEXTS[lang].APP}>
                    <DescriptionOption description={TEXTS[lang].LANGUAGE}>
                        <Select options={languages} selectedOption={language.label} onSelect={onSetLanguage} />
                    </DescriptionOption>
                    <DescriptionOption description={TEXTS[lang].SHOW_CONNECTION_ALWAYS}>
                        <Checkbox value={showConnectionAlways} onChange={toggleShowConnectionAlways} />
                    </DescriptionOption>
                    <DescriptionOption description={TEXTS[lang].DEBUG_MODE}>
                        <Checkbox value={isDebugEnabled} onChange={toggleIsDebugEnabled} />
                    </DescriptionOption>
                </Setting>
                {isDebugEnabled && (
                    <Setting name={TEXTS[lang].DEBUG}>
                        <DescriptionOption description={TEXTS[lang].DISPLAY_MARKUP}>
                            <Checkbox value={isMarkupEnabled} onChange={toggleIsMarkupEnabled} />
                        </DescriptionOption>
                        <ButtonsContainer>
                            <Button align={VALUES.STRETCH} name={debugWarningButtonName} onClick={toggleDebugWarning} />
                            <Button
                                align={VALUES.STRETCH}
                                name={TEXTS[lang].THROW_ERROR}
                                onClick={onDebugError}
                                isWarning
                            />
                            {isDebugWarning && <ErrorMessage error={`${TEXTS[lang].DEBUG_ERROR} ${nanoid()}`} />}
                        </ButtonsContainer>
                    </Setting>
                )}
                <Setting name={TEXTS[lang].CARDS}>
                    <DescriptionOption description={TEXTS[lang].SHOW_CARD_CATEGORIES}>
                        <Checkbox value={showCardTags} onChange={toggleShowCardTags} />
                    </DescriptionOption>
                    <DescriptionOption description={TEXTS[lang].SHOW_CARD_ID}>
                        <Checkbox value={showCardId} onChange={toggleShowCardId} />
                    </DescriptionOption>
                    <DescriptionOption description={TEXTS[lang].SHOW_CARD_DATE}>
                        <Checkbox value={showCardDate} onChange={toggleShowCardDate} />
                    </DescriptionOption>
                </Setting>
                <BackgroundSettings />
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
                <Setting name={TEXTS[lang].RESET}>
                    <Button
                        align={VALUES.STRETCH}
                        name={TEXTS[lang].RESTORE_DEFAULT_SETTINGS}
                        onClick={onRestoreDefaultSettings}
                    />
                    <ButtonsContainer>
                        <Button
                            align={VALUES.STRETCH}
                            name={TEXTS[lang].CLEAR_SESSION_STORAGE}
                            onClick={clearSessionStorage}
                        />
                        <Button
                            align={VALUES.STRETCH}
                            name={TEXTS[lang].CLEAR_LOCAL_STORAGE}
                            onClick={clearLocalStorage}
                            isWarning
                        />
                    </ButtonsContainer>
                </Setting>
            </S.Settings>
        </>
    )
}
