import { S } from 'src/layout/Dashboard/Dashboard_Styles.ts'
import { useEffect, useState } from 'react'
import { cardsApi } from 'src/features/cards/api'
import { Cards } from 'src/features/cards/ui/cards/Cards.tsx'
import { CardType } from 'src/features/cards/ui/cards/card/card.types.ts'

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
