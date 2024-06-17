import { S } from 'src/entities/card/ui/card.styles.ts'
import { CardType } from 'src/entities/card/model/types/card.types.ts'

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
