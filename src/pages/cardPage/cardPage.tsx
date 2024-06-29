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

export const CardPage = () => {
    const { id } = useParams<{ id: string }>()
    const card = useSelector((state: AppState) => state.cards.items.find(card => card.id === id))

    return (
        <>
            <Header>
                <Toolbar>
                    <LogoAcronym />
                    <CardFiltersSelect />
                    <CardsModeIconButton />
                </Toolbar>
                <div>
                    <OpenCardsIconButton />
                    <OpenSettingsIconButton />
                </div>
            </Header>
            <S.CardPage>
                {card && (
                    <S.Card>
                        <h2>{card.title}</h2>
                        <p>{card.tags}</p>
                        <p>{card.content}</p>
                        <p>{id}</p>
                    </S.Card>
                )}
            </S.CardPage>
        </>
    )
}
