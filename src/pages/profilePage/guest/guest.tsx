import { TEXTS } from 'src/shared/const'
import { Button } from 'src/shared/ui/button/button.tsx'
import { useAppDispatch, useAppSelector } from 'src/app/store/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import { fetchUserInfo, selectGuestId } from 'src/features/authorize/model/authorizeSlice.ts'
import { useGoogleLogin } from '@react-oauth/google'

export const Guest = () => {
    const lang = useAppSelector(selectLang)
    const dispatch = useAppDispatch()
    const guestId = useAppSelector(selectGuestId)

    // ToDo: Refactor loading, error, token expiration.
    const login = useGoogleLogin({
        onSuccess: tokenResponse => dispatch(fetchUserInfo(tokenResponse.access_token)),
        onError: errorResponse => console.error(errorResponse),
    })

    return (
        <>
            <h2>{TEXTS[lang].GUEST}</h2>
            <p>
                {TEXTS[lang].IDENTIFIER} {guestId}
            </p>
            <Button onClick={login} name={TEXTS[lang].LOGIN} />
        </>
    )
}
