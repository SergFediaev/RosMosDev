import { S } from 'src/entities/card/ui/card.styles.ts'
import {
    CardType,
    selectIsLearningMode,
    selectShowCardDate,
    selectShowCardId,
    selectShowCardTags,
} from 'src/entities/card'
import { EMOJIS, PATHS, TITLES, VALUES } from 'src/shared/const'
import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'
import { Palette } from 'src/shared/ui/palette/palette.tsx'
import { cardHighlights } from 'src/features/highlightCard/model/cardHighlights.ts'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardIcons } from 'src/shared/ui/cardIcons/cardIcons.tsx'
import { CardInfo } from 'src/widgets/cardInfo/cardInfo.tsx'
import { theme } from 'src/app/styles/theme.ts'
import { CardTags } from 'src/widgets/cardTags/cardTags.tsx'
import { useAppSelector } from 'src/app/store/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'

type Props = {
    card: CardType
}

export const Card = ({ card }: Props) => {
    const lang = useAppSelector(selectLang)
    const navigate = useNavigate()
    const { id, title, content, tags, created, updated } = card
    const isLearningMode = useAppSelector(selectIsLearningMode)
    const showCardTags = useAppSelector(selectShowCardTags)
    const showCardId = useAppSelector(selectShowCardId)
    const showCardDate = useAppSelector(selectShowCardDate)

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
    const copyToClipboard = () =>
        navigator.clipboard.writeText(isOpen ? `${title}${VALUES.DOUBLE_NEW_LINE}${content}` : title)
    const viewCard = () => navigate(`${PATHS.CARD}${id}`)

    useEffect(() => setIsOpen(isLearningMode), [isLearningMode])

    // ToDo: Copy to clipboard tooltip.
    return (
        <S.Card highlightColor={highlightColor}>
            <h2>{title}</h2>
            {showCardTags && <CardTags lang={lang} tags={tags} />}
            {isOpen && <S.Content>{content}</S.Content>}
            <CardInfo
                id={id}
                created={created}
                updated={updated}
                showCardId={showCardId}
                showCardDate={showCardDate}
                lang={lang}
                fontSize={theme.sizes.smallFont}
            />
            <CardIcons>
                <IconButton
                    icon={EMOJIS.PALETTE}
                    onClick={toggleShowPalette}
                    title={TITLES[lang].HIGHLIGHT_CARD}
                    iconSize={VALUES.MEDIUM_SIZE}
                />
                <IconButton
                    icon={EMOJIS.VIEW}
                    onClick={viewCard}
                    title={TITLES[lang].VIEW_CARD}
                    iconSize={VALUES.MEDIUM_SIZE}
                />
                <IconButton
                    icon={EMOJIS.CLIPBOARD}
                    onClick={copyToClipboard}
                    title={TITLES[lang].COPY_TO_CLIPBOARD}
                    iconSize={VALUES.MEDIUM_SIZE}
                />
                <IconButton
                    icon={isOpenIcon}
                    onClick={toggleIsOpen}
                    title={isOpenTitle}
                    iconSize={VALUES.MEDIUM_SIZE}
                />
                {showPalette && <Palette colors={cardHighlights} onClick={onSetHighlightColor} />}
            </CardIcons>
        </S.Card>
    )
}
