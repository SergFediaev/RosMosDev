import { S } from 'src/pages/dashboard/dashboard.styles.ts'
import { useEffect, useState } from 'react'
import { Cards } from 'src/pages/dashboard/cards/cards.tsx'
import { CardType } from 'src/entities/card/model/types/card.types.ts'
import { cardsApi } from 'src/entities/card'

export const Dashboard = () => {
    const [cards, setCards] = useState<CardType[]>(Array<CardType>)

    useEffect(() => {
        cardsApi.getCards().then(cards => setCards(cards))
    }, [])

    return (
        <S.Dashboard>
            <Cards cards={cards} />
        </S.Dashboard>
    )
}
