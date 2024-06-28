import { S } from 'src/entities/card/ui/card.styles.ts'
import { CardType, selectIsLearningMode } from 'src/entities/card'
import { useSelector } from 'react-redux'
import { EMOJIS, TEXTS, TITLES, VALUES } from 'src/shared/const'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'
import { Palette } from 'src/shared/ui/palette/palette.tsx'
import { cardHighlights } from 'src/features/highlightCard/model/cardHighlights.ts'
import { useEffect, useState } from 'react'
import { IconsContainer } from 'src/shared/ui/iconsContainer/iconsContainer.tsx'

type Props = {
    card: CardType
}

export const Card = ({ card }: Props) => {
    const lang = useSelector(selectLang)
    const { id, title, content, tags = TEXTS[lang].UNCATEGORIZED, created, updated } = card
    const isLearningMode = useSelector(selectIsLearningMode)

    const [isOpen, setIsOpen] = useState(isLearningMode)
    const isOpenIcon = isOpen ? EMOJIS.UP : EMOJIS.DOWN
    const isOpenTitle = isOpen ? TITLES[lang].CLOSE_CARD : TITLES[lang].OPEN_CARD

    const [highlightColor, setHighlightColor] = useState<string>()
    const [showPalette, setShowPalette] = useState(false)

    const toggleIsOpen = () => setIsOpen(!isOpen)
    const toggleShowPalette = () => setShowPalette(!showPalette)
    const onSetHighlightColor = (highlightColor: string) => {
        setShowPalette(false)
        setHighlightColor(highlightColor)
    }

    useEffect(() => setIsOpen(isLearningMode), [isLearningMode])

    return (
        <S.Card highlightColor={highlightColor}>
            <h2>{title}</h2>
            <p>{tags}</p>
            {isOpen && <S.Content>{content}</S.Content>}
            <S.Info>{id}</S.Info>
            {created && (
                <S.Info>
                    {TEXTS[lang].CREATED} {created}
                </S.Info>
            )}
            {updated && (
                <S.Info>
                    {TEXTS[lang].UPDATED} {updated}
                </S.Info>
            )}
            <IconsContainer>
                <IconButton
                    icon={isOpenIcon}
                    onClick={toggleIsOpen}
                    title={isOpenTitle}
                    iconSize={VALUES.MEDIUM_SIZE}
                />
                <IconButton
                    icon={EMOJIS.PALETTE}
                    onClick={toggleShowPalette}
                    title={TITLES[lang].HIGHLIGHT_CARD}
                    iconSize={VALUES.MEDIUM_SIZE}
                />
                {showPalette && <Palette colors={cardHighlights} onClick={onSetHighlightColor} />}
            </IconsContainer>
        </S.Card>
    )
}
