import { S } from 'src/pages/cardsPage/cardsContainer/cards/cards.styles.ts'
import { Card, CardType, selectCardsError } from 'src/entities/card'
import { TEXTS } from 'src/shared/const'
import { useSelector } from 'react-redux'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { ErrorMessage } from 'src/shared/ui/errorMessage/errorMessage.tsx'

type Props = {
    cards: CardType[]
}

export const Cards = ({ cards }: Props) => {
    const lang = useSelector(selectLang)
    const hasCards = cards.length
    const cardsError = useSelector(selectCardsError)

    if (cardsError) return <ErrorMessage error={cardsError} />

    return hasCards ? (
        <S.Cards>
            {cards.map(card => (
                <Card key={card.id} card={card} />
            ))}
        </S.Cards>
    ) : (
        TEXTS[lang].CARDS_NOT_FOUND
    )
}
