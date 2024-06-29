import { S } from 'src/pages/cardPage/cardPage.styles.ts'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppState } from 'src/app/store.ts'
import { Header } from 'src/widgets/header/header.tsx'
import { Toolbar } from 'src/pages/dashboard/dashboardHeader/toolbar/toolbar.tsx'
import { LogoAcronym } from 'src/shared/ui/logoAcronym/logoAcronym.tsx'
import { CardFiltersSelect } from 'src/widgets/cardFiltersSelect/cardFiltersSelect.tsx'
import { CardsModeIconButton } from 'src/widgets/cardsModeIconButton/cardsModeIconButton.tsx'
import { OpenSettingsIconButton } from 'src/widgets/openSettingsIconButton/openSettingsIconButton.tsx'
import { OpenCardsIconButton } from 'src/widgets/openCardsIconButton/openCardsIconButton.tsx'
import { NavIcons } from 'src/widgets/header/navIcons/navIcons.tsx'
import { Spoiler } from 'src/widgets/spoiler/spoiler.tsx'
import { CardInfo } from 'src/widgets/cardInfo/cardInfo.tsx'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { CardTags } from 'src/widgets/cardTags/cardTags.tsx'

export const CardPage = () => {
    const lang = useSelector(selectLang)
    const { id } = useParams<{ id: string }>()
    // ToDo: Refactor card.id in JSX, !! and find card in selector.
    const card = useSelector((state: AppState) => state.cards.items.find(card => card.id === id)!!)
    const { title, content, tags, created, updated } = card

    return (
        <>
            <Header>
                <Toolbar>
                    <LogoAcronym />
                    <CardFiltersSelect />
                    <CardsModeIconButton />
                </Toolbar>
                <NavIcons>
                    <OpenCardsIconButton />
                    <OpenSettingsIconButton />
                </NavIcons>
            </Header>
            <S.CardPage>
                <S.Card>
                    <h2>{title}</h2>
                    <CardTags lang={lang} tags={tags} />
                    <Spoiler>{content}</Spoiler>
                    <CardInfo id={card.id} created={created} updated={updated} lang={lang} />
                </S.Card>
            </S.CardPage>
        </>
    )
}
