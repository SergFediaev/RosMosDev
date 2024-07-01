import { S } from './cardsContainer.styles.ts'
import { Cards } from 'src/pages/cardsPage/cardsContainer/cards/cards.tsx'
import { selectSortedCards } from 'src/features/sortCards'
import { selectIsCardsLoading } from 'src/entities/card'
import { useAppSelector } from 'src/app/store.ts'

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
