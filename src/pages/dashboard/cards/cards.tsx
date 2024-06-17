import { Card } from 'src/entities/card/ui/card.tsx'
import { S } from 'src/pages/dashboard/cards/cards.styles.ts'
import { CardType } from 'src/entities/card/model/types/card.types.ts'

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
