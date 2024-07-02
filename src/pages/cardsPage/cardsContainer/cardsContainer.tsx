import { S } from './cardsContainer.styles.ts'
import { Cards } from 'src/pages/cardsPage/cardsContainer/cards/cards.tsx'
import { selectIsCardsLoading, selectSortedCards } from 'src/entities/card'
import { useAppSelector } from 'src/app/store/store.ts'

export const CardsContainer = () => {
    const sortedCards = useAppSelector(selectSortedCards)
    const isCardsLoading = useAppSelector(selectIsCardsLoading)

    if (isCardsLoading) return

    return (
        <S.CardsContainer>
            <Cards cards={sortedCards} />
        </S.CardsContainer>
    )
}
