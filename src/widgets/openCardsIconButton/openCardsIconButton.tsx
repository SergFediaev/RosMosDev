import { EMOJIS, PATHS, TITLES } from 'src/shared/const'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'src/app/store/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import { IconButton } from 'src/shared/ui/iconButton/iconButton.tsx'
import { theme } from 'src/app/styles/theme.ts'

export const OpenCardsIconButton = () => {
    const lang = useAppSelector(selectLang)
    const navigate = useNavigate()
    const openCards = () => navigate(PATHS.ROOT)

    return (
        <IconButton
            icon={EMOJIS.HOME}
            onClick={openCards}
            title={TITLES[lang].OPEN_CARDS}
            iconSize={theme.sizes.largeFont}
        />
    )
}
