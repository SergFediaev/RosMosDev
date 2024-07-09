import { SYMBOLS, TEXTS } from 'src/shared/const'
import { Button } from 'src/shared/ui/button/button.tsx'
import { useAppDispatch, useAppSelector } from 'src/app/store/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import {
    fetchUserInfo,
    selectAuthorizeError,
    selectGuestId,
    selectIsAuthorizeLoading,
    setAuthorizeError,
    setIsAuthorizeLoading,
} from 'src/features/authorize/model/authorizeSlice.ts'
import { useGoogleLogin } from '@react-oauth/google'
import { ErrorMessage } from 'src/shared/ui/errorMessage/errorMessage.tsx'

export const Guest = () => {
    const lang = useAppSelector(selectLang)
    const dispatch = useAppDispatch()
    const guestId = useAppSelector(selectGuestId)
    const authorizeError = useAppSelector(selectAuthorizeError)
    const isAuthorizeLoading = useAppSelector(selectIsAuthorizeLoading)
    const setAuthorizeLoading = (isLoading: boolean) => dispatch(setIsAuthorizeLoading({ isLoading }))

    // ToDo: Refactor token expiration.
    const login = useGoogleLogin({
        onSuccess: tokenResponse => dispatch(fetchUserInfo(tokenResponse.access_token)),
        onError: ({ error }) => error && dispatch(setAuthorizeError({ error })),
        onNonOAuthError: nonOAuthError => {
            console.warn(nonOAuthError)
            setAuthorizeLoading(false)
        },
    })

    return (
        <>
            <h2>{TEXTS[lang].GUEST}</h2>
            <p>
                {TEXTS[lang].IDENTIFIER}
                {SYMBOLS.COLON_SPACE}
                {guestId}
            </p>
            <p>{TEXTS[lang].GUEST_CREATE_CARDS}</p>
            <p>{TEXTS[lang].USER_CREATE_CARDS}</p>
            <Button
                onClick={() => {
                    setAuthorizeLoading(true)
                    login()
                }}
                name={TEXTS[lang].LOGIN}
                isLoading={isAuthorizeLoading}
            />
            {authorizeError && <ErrorMessage error={authorizeError} />}
        </>
    )
}
