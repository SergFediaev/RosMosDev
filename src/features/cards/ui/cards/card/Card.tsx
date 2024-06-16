import { S } from 'src/features/cards/ui/cards/card/Card_Styles.ts'
import { CardType } from 'src/features/cards/ui/cards/card/card.types.ts'

type Props = {
    card: CardType
}

export const Card = ({ card }: Props) => {
    const { title, content, tags = 'Uncategorized' } = card

    return (
        <S.Card>
            <h2>{title}</h2>
            <p>{tags}</p>
            <p>{content}</p>
        </S.Card>
    )
}
