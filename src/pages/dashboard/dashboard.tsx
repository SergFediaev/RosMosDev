import { S } from 'src/pages/dashboard/dashboard.styles.ts'
import { Cards } from 'src/pages/dashboard/cards/cards.tsx'
import { useAppDispatch } from 'src/app/store.ts'
import { fetchCards } from 'src/entities/card/model/cardSlice.ts'
import { useSelector } from 'react-redux'
import { selectCards } from 'src/entities/card/model/card.selectors.ts'
import { useEffect } from 'react'

export const Dashboard = () => {
    const cards = useSelector(selectCards)
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
