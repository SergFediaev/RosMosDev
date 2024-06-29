import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'
import { EMOJIS, PATHS, TITLES, VALUES } from 'src/shared/const'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'

export const OpenCardsIconButton = () => {
    const lang = useSelector(selectLang)
    const navigate = useNavigate()
    const openCards = () => navigate(PATHS.ROOT)

    return (
        <IconButton icon={EMOJIS.HOME} onClick={openCards} title={TITLES[lang].OPEN_CARDS} iconSize={VALUES.BIG_SIZE} />
    )
}
