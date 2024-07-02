import { S } from 'src/pages/cardsPage/cardsContainer/cards/cards.styles.ts'
import { Card, CardType, selectCardsError } from 'src/entities/card'
import { TEXTS } from 'src/shared/const'
import { ErrorMessage } from 'src/shared/ui/errorMessage/errorMessage.tsx'
import { useAppSelector } from 'src/app/store/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'

type Props = {
    cards: CardType[]
}

export const Cards = ({ cards }: Props) => {
    const lang = useAppSelector(selectLang)
    const hasCards = cards.length
    const cardsError = useAppSelector(selectCardsError)

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
