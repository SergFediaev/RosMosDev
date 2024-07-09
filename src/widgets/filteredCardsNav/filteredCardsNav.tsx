import { S } from './filteredCardsNav.styles.ts'
import { BUTTONS, EMOJIS, EVENTS, PATHS, SYMBOLS, TITLES } from 'src/shared/const'
import { useNavigate } from 'react-router-dom'
import { useCallback, useEffect } from 'react'
import { useAppSelector } from 'src/app/store/store.ts'
import { selectFilteredCardIndexById, selectFilteredCards } from 'src/entities/card'
import { Lang } from 'src/shared/types/language.ts'
import { IconButton } from 'src/shared/ui/iconButton/iconButton.tsx'
import { theme } from 'src/app/styles/theme.ts'

type Props = {
    id: string
    lang: Lang
}

export const FilteredCardsNav = ({ id, lang }: Props) => {
    const filteredCards = useAppSelector(selectFilteredCards)
    const cardIndex = useAppSelector(selectFilteredCardIndexById(id))
    const isCardsSwipingAvailable = filteredCards.length > 1
    const isCardsRandomAvailable = filteredCards.length > 2

    const navigate = useNavigate()
    const navigateToCard = useCallback(
        (index: number) => navigate(`${PATHS.CARD}${filteredCards[index].id}`),
        [filteredCards, navigate],
    )

    const prevCard = useCallback(() => {
        let prevIndex = cardIndex - 1
        if (prevIndex < 0) prevIndex = filteredCards.length - 1
        navigateToCard(prevIndex)
    }, [cardIndex, filteredCards.length, navigateToCard])

    const nextCard = useCallback(() => {
        let nextIndex = cardIndex + 1
        if (nextIndex === filteredCards.length) nextIndex = 0
        navigateToCard(nextIndex)
    }, [cardIndex, filteredCards.length, navigateToCard])

    const randomCard = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * filteredCards.length)

        if (randomIndex === cardIndex) return randomCard()

        navigateToCard(randomIndex)
    }, [cardIndex, filteredCards.length, navigateToCard])

    useEffect(() => {
        // ToDo: Check if card from CardPage not found by index here in filtered cards and filter saved in local storage.
        if (cardIndex === -1) navigateToCard(0)
    }, [cardIndex, navigateToCard])

    useEffect(() => {
        if (!isCardsSwipingAvailable) return

        const onKeyDown = (event: KeyboardEvent) => {
            // ToDo: Fix preventDefault in every key down.
            event.preventDefault()

            switch (event.key) {
                case BUTTONS.ARROW_LEFT:
                    return prevCard()
                case BUTTONS.ARROW_RIGHT:
                    return nextCard()
                case BUTTONS.R: {
                    if (isCardsRandomAvailable) return randomCard()
                }
            }
        }

        addEventListener(EVENTS.KEY_DOWN, onKeyDown)
        return () => removeEventListener(EVENTS.KEY_DOWN, onKeyDown)
    }, [isCardsRandomAvailable, isCardsSwipingAvailable, nextCard, prevCard, randomCard])

    return (
        <S.FilteredCardsNav>
            {isCardsSwipingAvailable && (
                <IconButton
                    icon={EMOJIS.PREV}
                    onClick={prevCard}
                    iconSize={theme.sizes.largeFont}
                    title={TITLES[lang].PREV_CARD}
                />
            )}
            <S.CardsQuantity>
                <span title={TITLES[lang].CURRENT_CARD}>{cardIndex + 1} </span>
                {SYMBOLS.SLASH}
                <span title={TITLES[lang].FILTERED_CARDS}> {filteredCards.length}</span>
            </S.CardsQuantity>
            {isCardsSwipingAvailable && (
                <IconButton
                    icon={EMOJIS.NEXT}
                    onClick={nextCard}
                    iconSize={theme.sizes.largeFont}
                    title={TITLES[lang].NEXT_CARD}
                />
            )}
            {isCardsRandomAvailable && (
                <IconButton
                    icon={EMOJIS.RANDOM}
                    onClick={randomCard}
                    iconSize={theme.sizes.largeFont}
                    title={TITLES[lang].RANDOM_CARD}
                />
            )}
        </S.FilteredCardsNav>
    )
}
