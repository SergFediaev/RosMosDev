import { S } from './cardsContainer.styles.ts'
import { Cards } from 'src/pages/cardsPage/cardsContainer/cards/cards.tsx'
import { useSelector } from 'react-redux'
import { selectSortedCards } from 'src/features/sortCards'
import { selectIsCardsLoading } from 'src/entities/card'

export const CardsContainer = () => {
    const sortedCards = useSelector(selectSortedCards)
    const isCardsLoading = useSelector(selectIsCardsLoading)

    if (isCardsLoading) return

    return (
        <S.CardsContainer>
            <Cards cards={sortedCards} />
        </S.CardsContainer>
    )
}
