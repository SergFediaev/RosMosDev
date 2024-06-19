import { S } from 'src/pages/dashboard/dashboard.styles.ts'
import { Cards } from 'src/pages/dashboard/cards/cards.tsx'
import { useAppDispatch } from 'src/app/store.ts'
import { fetchCards } from 'src/entities/card/model/cardSlice.ts'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectSortedCards } from 'src/features/sortCards'

export const Dashboard = () => {
    const cards = useSelector(selectSortedCards)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchCards())
    }, [dispatch])

    return (
        <S.Dashboard>
            <Cards cards={cards} />
        </S.Dashboard>
    )
}
