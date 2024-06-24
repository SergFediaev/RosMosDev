import { S } from './settings.styles.ts'
import { useDispatch, useSelector } from 'react-redux'
import { selectLang, selectSettings } from 'src/entities/setting/model/setting.selectors.ts'
import { Language } from 'src/shared/types/language.ts'
import { setIsDebugEnabled, setIsMarkupEnabled, setLanguage } from 'src/entities/setting/model/settingSlice.ts'
import { LINKS, TEXTS, VALUES } from 'src/shared/const'
import { nanoid } from '@reduxjs/toolkit'
import { SettingsHeader } from 'src/pages/settings/settingsHeader/settingsHeader.tsx'
import { Setting } from 'src/widgets/setting/setting.tsx'
import { DescriptionOption } from 'src/widgets/setting/descriptionOption/descriptionOption.tsx'
import { Select } from 'src/shared/ui/select/select.tsx'
import { Checkbox } from 'src/shared/ui/checkbox/checkbox.tsx'
import { Signature } from 'src/pages/settings/signature/signature.tsx'
import { Button } from 'src/shared/ui/button/button.tsx'
import { SingleOption } from 'src/widgets/setting/singleOption/singleOption.tsx'
import { useState } from 'react'

export const Settings = () => {
    const dispatch = useDispatch()
    const settings = useSelector(selectSettings)
    const lang = useSelector(selectLang)
    const [isDebugError, setIsDebugError] = useState(false)

    const onSetLanguage = (language: Language) => dispatch(setLanguage({ language }))
    const onSetIsDebugEnabled = (isDebugEnabled: boolean) => dispatch(setIsDebugEnabled({ isDebugEnabled }))
    const onSetIsMarkupEnabled = (isMarkupEnabled: boolean) => dispatch(setIsMarkupEnabled({ isMarkupEnabled }))
    const onDebugError = () => setIsDebugError(true)

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
                        <SingleOption>
                            <Button name={TEXTS[lang].THROW_ERROR} onClick={onDebugError} isWarning />
                        </SingleOption>
                    </Setting>
                )}
            </S.Settings>
        </>
    )
}
