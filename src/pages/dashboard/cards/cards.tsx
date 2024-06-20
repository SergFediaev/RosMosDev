import { S } from 'src/pages/dashboard/cards/cards.styles.ts'
import { Card, CardType } from 'src/entities/card'

type Props = {
    cards: CardType[]
}

export const Cards = ({ cards }: Props) => {
    return (
        <S.Cards>
            {cards.map((card, index) => (
                <Card key={index} card={card} />
            ))}
        </S.Cards>
    )
}
