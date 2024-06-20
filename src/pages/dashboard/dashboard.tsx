import { S } from 'src/pages/dashboard/dashboard.styles.ts'
import { Cards } from 'src/pages/dashboard/cards/cards.tsx'
import { useAppDispatch } from 'src/app/store.ts'
import { fetchCards } from 'src/entities/card/model/cardSlice.ts'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectSortedCards } from 'src/features/sortCards'
import { TEXTS, VALUES } from 'src/shared/const'
import { selectIsCardsLoading } from 'src/entities/card/model/card.selectors.ts'

export const Dashboard = () => {
    const cards = useSelector(selectSortedCards)
    const dispatch = useAppDispatch()
    const lang = VALUES.RU
    const hasCards = cards.length
    const isCardsLoading = useSelector(selectIsCardsLoading)

    useEffect(() => {
        dispatch(fetchCards())
    }, [dispatch])

    return (
        <S.Dashboard>
            {hasCards ? <Cards cards={cards} /> : !isCardsLoading && <>{TEXTS[lang].CARDS_NOT_FOUND}</>}
        </S.Dashboard>
    )
}
