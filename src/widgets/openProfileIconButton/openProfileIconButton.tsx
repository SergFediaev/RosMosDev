import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'
import { EMOJIS, PATHS, TITLES, VALUES } from 'src/shared/const'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'src/app/store/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'

// ToDo: Universal component.
export const OpenProfileIconButton = () => {
    const lang = useAppSelector(selectLang)
    const navigate = useNavigate()
    const openProfile = () => navigate(PATHS.PROFILE)

    return (
        <IconButton
            icon={EMOJIS.PROFILE}
            onClick={openProfile}
            title={TITLES[lang].OPEN_PROFILE}
            iconSize={VALUES.BIG_SIZE}
        />
    )
}
