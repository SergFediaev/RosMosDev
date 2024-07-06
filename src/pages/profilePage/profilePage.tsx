import { S } from './profilePage.styles.ts'
import { Header } from 'src/widgets/header/header.tsx'
import { TEXTS } from 'src/shared/const'
import { NavIcons } from 'src/widgets/header/navIcons/navIcons.tsx'
import { OpenCardsIconButton } from 'src/widgets/openCardsIconButton/openCardsIconButton.tsx'
import { useAppSelector } from 'src/app/store/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import { OpenSettingsIconButton } from 'src/widgets/openSettingsIconButton/openSettingsIconButton.tsx'
import { selectIsAuthorized } from 'src/features/authorize/model/authorizeSlice.ts'
import { User } from 'src/pages/profilePage/user/user.tsx'
import { Guest } from 'src/pages/profilePage/guest/guest.tsx'
import { CreateCardIconButton } from 'src/widgets/createCardIconButton/createCardIconButton.tsx'
import { Page } from 'src/shared/ui/page/page.tsx'
import { BreadcrumbLogo } from 'src/widgets/header/breadcrumbLogo/breadcrumbLogo.tsx'

export const ProfilePage = () => {
    const lang = useAppSelector(selectLang)
    const isAuthorized = useAppSelector(selectIsAuthorized)

    return (
        <>
            <Header>
                <BreadcrumbLogo path={TEXTS[lang].PROFILE} lang={lang} />
                <NavIcons>
                    <OpenSettingsIconButton />
                    <CreateCardIconButton />
                    <OpenCardsIconButton />
                </NavIcons>
            </Header>
            <Page>
                <S.Profile>{isAuthorized ? <User /> : <Guest />}</S.Profile>
            </Page>
        </>
    )
}
