import { S } from './createCardPage.styles.ts'
import { Page } from 'src/shared/ui/page/page.tsx'
import { Header } from 'src/widgets/header/header.tsx'
import { NavIcons } from 'src/widgets/header/navIcons/navIcons.tsx'
import { OpenProfileIconButton } from 'src/widgets/openProfileIconButton/openProfileIconButton.tsx'
import { OpenCardsIconButton } from 'src/widgets/openCardsIconButton/openCardsIconButton.tsx'
import { OpenSettingsIconButton } from 'src/widgets/openSettingsIconButton/openSettingsIconButton.tsx'
import { BreadcrumbLogo } from 'src/widgets/header/breadcrumbLogo/breadcrumbLogo.tsx'
import { useAppSelector } from 'src/app/store/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import { TEXTS } from 'src/shared/const'

export const CreateCardPage = () => {
    const lang = useAppSelector(selectLang)

    return (
        <>
            <Header>
                <BreadcrumbLogo path={TEXTS[lang].CREATE_NEW_CARD} lang={lang} />
                <NavIcons>
                    <OpenProfileIconButton />
                    <OpenSettingsIconButton />
                    <OpenCardsIconButton />
                </NavIcons>
            </Header>
            <Page>
                <S.CreateCard></S.CreateCard>
            </Page>
        </>
    )
}
