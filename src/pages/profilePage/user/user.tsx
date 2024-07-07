import { S } from './user.styles.ts'
import { SYMBOLS, TEXTS } from 'src/shared/const'
import { UserPicture } from 'src/widgets/userPicture/userPicture.tsx'
import { Button } from 'src/shared/ui/button/button.tsx'
import { useAppDispatch, useAppSelector } from 'src/app/store/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import { selectUser, setIsAuthorized } from 'src/features/authorize/model/authorizeSlice.ts'
import { googleLogout } from '@react-oauth/google'

export const User = () => {
    const lang = useAppSelector(selectLang)
    const dispatch = useAppDispatch()
    const user = useAppSelector(selectUser)

    if (!user) return

    const logout = () => {
        dispatch(setIsAuthorized({ isAuthorized: false }))
        googleLogout()
    }

    return (
        <>
            <S.TitleWithPicture>
                <h2>{TEXTS[lang].USER}</h2>
                <UserPicture title={TEXTS[lang].USER_PICTURE} />
            </S.TitleWithPicture>
            <p>
                {TEXTS[lang].IDENTIFIER}
                {SYMBOLS.COLON_SPACE}
                {user.sub}
            </p>
            <p>
                {TEXTS[lang].NAME}
                {SYMBOLS.COLON_SPACE}
                {user.name}
            </p>
            <p>
                {TEXTS[lang].MAIL}
                {SYMBOLS.COLON_SPACE}
                {user.email}
            </p>
            <Button name={TEXTS[lang].LOGOUT} onClick={logout} />
        </>
    )
}
