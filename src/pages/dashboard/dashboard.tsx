import { S } from 'src/pages/dashboard/dashboard.styles.ts'
import { Cards } from 'src/pages/dashboard/cards/cards.tsx'
import { useAppDispatch } from 'src/app/store.ts'
import { fetchCards } from 'src/entities/card/model/cardSlice.ts'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectSortedCards } from 'src/features/sortCards'
import { TEXTS } from 'src/shared/const'
import { selectIsCardsLoading } from 'src/entities/card/model/card.selectors.ts'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { DashboardHeader } from 'src/pages/dashboard/dashboardHeader/dashboardHeader.tsx'

export const Dashboard = () => {
    const lang = useSelector(selectLang)
    const cards = useSelector(selectSortedCards)
    const dispatch = useAppDispatch()
    const hasCards = cards.length
    const isCardsLoading = useSelector(selectIsCardsLoading)

    useEffect(() => {
        dispatch(fetchCards(lang))
    }, [dispatch, lang])

    return (
        <>
            <DashboardHeader />
            <S.Dashboard>
                {hasCards ? <Cards cards={cards} /> : !isCardsLoading && <>{TEXTS[lang].CARDS_NOT_FOUND}</>}
            </S.Dashboard>
        </>
    )
}
