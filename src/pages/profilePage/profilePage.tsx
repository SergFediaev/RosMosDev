import { S } from './profilePage.styles.ts'
import { Header } from 'src/widgets/header/header.tsx'
import { SYMBOLS, TEXTS } from 'src/shared/const'
import { NavIcons } from 'src/widgets/header/navIcons/navIcons.tsx'
import { OpenCardsIconButton } from 'src/widgets/openCardsIconButton/openCardsIconButton.tsx'
import { useAppSelector } from 'src/app/store/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import { OpenSettingsIconButton } from 'src/widgets/openSettingsIconButton/openSettingsIconButton.tsx'
import { selectIsAuthorized } from 'src/features/authorize/model/authorizeSlice.ts'
import { User } from 'src/pages/profilePage/user/user.tsx'
import { Guest } from 'src/pages/profilePage/guest/guest.tsx'

export const ProfilePage = () => {
    const lang = useAppSelector(selectLang)
    const isAuthorized = useAppSelector(selectIsAuthorized)

    return (
        <>
            <Header>
                {/* ToDo: Shared component for header h1 */}
                <h1>
                    {TEXTS[lang].APP_NAME} {SYMBOLS.SLASH} {TEXTS[lang].PROFILE}
                </h1>
                <NavIcons>
                    <OpenSettingsIconButton />
                    <OpenCardsIconButton />
                </NavIcons>
            </Header>
            <S.ProfilePage>
                <S.Profile>{isAuthorized ? <User /> : <Guest />}</S.Profile>
            </S.ProfilePage>
        </>
    )
}
