import { Card } from 'src/features/cards/ui/cards/card/Card.tsx'
import { S } from 'src/features/cards/ui/cards/Cards_Styles.ts'
import { CardType } from 'src/features/cards/ui/cards/card/card.types.ts'

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
