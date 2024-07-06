import { EMOJIS, PATHS, TITLES, VALUES } from 'src/shared/const'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'src/app/store/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import { IconButton } from 'src/shared/ui/iconButton/iconButton.tsx'

export const CreateCardIconButton = () => {
    const lang = useAppSelector(selectLang)
    const navigate = useNavigate()
    const createCard = () => navigate(`${PATHS.CARD}${PATHS.CREATE}`)

    return (
        <IconButton
            icon={EMOJIS.CREATE}
            onClick={createCard}
            title={TITLES[lang].CREATE_CARD}
            iconSize={VALUES.BIG_SIZE}
        />
    )
}
