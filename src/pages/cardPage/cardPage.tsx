import { S } from 'src/pages/cardPage/cardPage.styles.ts'
import { useParams } from 'react-router-dom'
import { useAppSelector } from 'src/app/store/store.ts'
import { Header } from 'src/widgets/header/header.tsx'
import { Toolbar } from 'src/widgets/header/toolbar/toolbar.tsx'
import { LogoAcronym } from 'src/shared/ui/logoAcronym/logoAcronym.tsx'
import { CardFiltersSelect } from 'src/widgets/cardFiltersSelect/cardFiltersSelect.tsx'
import { CardsModeIconButton } from 'src/widgets/cardsModeIconButton/cardsModeIconButton.tsx'
import { OpenSettingsIconButton } from 'src/widgets/openSettingsIconButton/openSettingsIconButton.tsx'
import { OpenCardsIconButton } from 'src/widgets/openCardsIconButton/openCardsIconButton.tsx'
import { NavIcons } from 'src/widgets/header/navIcons/navIcons.tsx'
import { Spoiler } from 'src/widgets/spoiler/spoiler.tsx'
import { CardInfo } from 'src/widgets/cardInfo/cardInfo.tsx'
import { CardTags } from 'src/widgets/cardTags/cardTags.tsx'
import { FilteredCardsNav } from 'src/widgets/filteredCardsNav/filteredCardsNav.tsx'
import { KEYS, TEXTS } from 'src/shared/const'
import { ErrorMessage } from 'src/shared/ui/errorMessage/errorMessage.tsx'
import { selectCardById } from 'src/entities/card'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import { OpenProfileIconButton } from 'src/widgets/openProfileIconButton/openProfileIconButton.tsx'
import { CreateCardIconButton } from 'src/widgets/createCardIconButton/createCardIconButton.tsx'
import { Page } from 'src/shared/ui/page/page.tsx'

export const CardPage = () => {
    const lang = useAppSelector(selectLang)
    const params = useParams<{ [KEYS.ID]: string }>()
    const card = useAppSelector(selectCardById(params.id))

    // ToDo: Custom card not found page.
    if (!card) return <ErrorMessage error={TEXTS[lang].CARDS_NOT_FOUND} />

    const { id, title, content, tags, created, updated, name, email } = card

    return (
        <>
            <Header>
                <Toolbar>
                    <LogoAcronym />
                    <CardFiltersSelect />
                    <FilteredCardsNav id={id} lang={lang} />
                    <CardsModeIconButton />
                </Toolbar>
                <NavIcons>
                    <OpenProfileIconButton />
                    <OpenSettingsIconButton />
                    <CreateCardIconButton />
                    <OpenCardsIconButton />
                </NavIcons>
            </Header>
            <Page>
                <S.Card>
                    <h2>{title}</h2>
                    <CardTags lang={lang} tags={tags} />
                    <Spoiler>{content}</Spoiler>
                    <CardInfo id={id} created={created} updated={updated} name={name} email={email} lang={lang} />
                </S.Card>
            </Page>
        </>
    )
}
