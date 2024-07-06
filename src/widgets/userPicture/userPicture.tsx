import { S } from './userPicture.styles.ts'
import { useAppSelector } from 'src/app/store/store.ts'
import { TEXTS } from 'src/shared/const'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import { selectUserPicture } from 'src/features/authorize/model/authorizeSlice.ts'

type Props = {
    onClick?: () => void
    title?: string
}

export const UserPicture = ({ onClick, title }: Props) => {
    const lang = useAppSelector(selectLang)
    const userPicture = useAppSelector(selectUserPicture)

    if (!userPicture) return

    return (
        <S.UserPicture
            src={userPicture}
            alt={TEXTS[lang].USER_PICTURE}
            onClick={onClick}
            title={title}
            isClickable={!!onClick}
        />
    )
}
