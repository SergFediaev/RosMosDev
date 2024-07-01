import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'
import { EMOJIS, PATHS, TITLES, VALUES } from 'src/shared/const'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'src/app/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'

export const OpenSettingsIconButton = () => {
    const lang = useAppSelector(selectLang)
    const navigate = useNavigate()
    const openSettings = () => navigate(PATHS.SETTINGS)

    return (
        <IconButton
            icon={EMOJIS.SETTINGS}
            onClick={openSettings}
            title={TITLES[lang].OPEN_SETTINGS}
            iconSize={VALUES.BIG_SIZE}
            isIconSpinning
        />
    )
}
