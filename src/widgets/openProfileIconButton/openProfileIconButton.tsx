import { EMOJIS, PATHS, TITLES, VALUES } from 'src/shared/const'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'src/app/store/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import { selectIsAuthorized } from 'src/features/authorize/model/authorizeSlice.ts'
import { UserPicture } from 'src/widgets/userPicture/userPicture.tsx'
import { IconButton } from 'src/shared/ui/iconButton/iconButton.tsx'

// ToDo: Universal component.
export const OpenProfileIconButton = () => {
    const lang = useAppSelector(selectLang)
    const navigate = useNavigate()
    const isAuthorized = useAppSelector(selectIsAuthorized)
    const title = TITLES[lang].OPEN_PROFILE
    const openProfile = () => navigate(PATHS.PROFILE)

    // ToDo: Check user picture.
    return isAuthorized ? (
        <UserPicture onClick={openProfile} title={title} />
    ) : (
        <IconButton icon={EMOJIS.PROFILE} onClick={openProfile} title={title} iconSize={VALUES.BIG_SIZE} />
    )
}
