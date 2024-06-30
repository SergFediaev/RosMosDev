import { S } from 'src/pages/cardPage/cardPage.styles.ts'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AppState } from 'src/app/store.ts'
import { Header } from 'src/widgets/header/header.tsx'
import { Toolbar } from 'src/pages/dashboard/dashboardHeader/toolbar/toolbar.tsx'
import { LogoAcronym } from 'src/shared/ui/logoAcronym/logoAcronym.tsx'
import { CardFiltersSelect } from 'src/widgets/cardFiltersSelect/cardFiltersSelect.tsx'
import { CardsModeIconButton } from 'src/widgets/cardsModeIconButton/cardsModeIconButton.tsx'
import { OpenSettingsIconButton } from 'src/widgets/openSettingsIconButton/openSettingsIconButton.tsx'
import { OpenCardsIconButton } from 'src/widgets/openCardsIconButton/openCardsIconButton.tsx'
import { NavIcons } from 'src/widgets/header/navIcons/navIcons.tsx'
import { Spoiler } from 'src/widgets/spoiler/spoiler.tsx'
import { CardInfo } from 'src/widgets/cardInfo/cardInfo.tsx'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { CardTags } from 'src/widgets/cardTags/cardTags.tsx'
import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'
import { EMOJIS, PATHS, TITLES, VALUES } from 'src/shared/const'
import { selectFilteredCards } from 'src/entities/card'
import { useCallback, useEffect } from 'react'

export const CardPage = () => {
    const lang = useSelector(selectLang)
    const { id } = useParams<{ id: string }>()
    // ToDo: Refactor card.id in JSX, !! and find card in selector.
    const card = useSelector((state: AppState) => state.cards.items.find(card => card.id === id)!!)
    const { title, content, tags, created, updated } = card

    const filteredCards = useSelector(selectFilteredCards)
    const cardIndex = filteredCards.findIndex(card => card.id === id)

    const navigate = useNavigate()
    const navigateToCard = useCallback(
        (cardIndex: number) => navigate(`${PATHS.CARD}${filteredCards[cardIndex].id}`),
        [filteredCards, navigate],
    )

    const prevCard = () => {
        let prevIndex = cardIndex - 1
        if (prevIndex < 0) prevIndex = filteredCards.length - 1
        navigateToCard(prevIndex)
    }

    const nextCard = () => {
        let nextIndex = cardIndex + 1
        if (nextIndex === filteredCards.length) nextIndex = 0
        navigateToCard(nextIndex)
    }

    const randomCard = () => navigateToCard(Math.floor(Math.random() * filteredCards.length))

    useEffect(() => {
        if (cardIndex === -1) navigateToCard(0)
    }, [cardIndex, navigateToCard])

    return (
        <>
            <Header>
                <Toolbar>
                    <LogoAcronym />
                    <CardFiltersSelect />
                    <CardsModeIconButton />
                    <IconButton
                        icon={EMOJIS.PREV}
                        onClick={prevCard}
                        iconSize={VALUES.BIG_SIZE}
                        title={TITLES[lang].PREV_CARD}
                    />
                    <S.CardsQuantity>{`${cardIndex + 1} / ${filteredCards.length}`}</S.CardsQuantity>
                    <IconButton
                        icon={EMOJIS.NEXT}
                        onClick={nextCard}
                        iconSize={VALUES.BIG_SIZE}
                        title={TITLES[lang].NEXT_CARD}
                    />
                    <IconButton
                        icon={EMOJIS.RANDOM}
                        onClick={randomCard}
                        iconSize={VALUES.BIG_SIZE}
                        title={TITLES[lang].RANDOM_CARD}
                    />
                </Toolbar>
                <NavIcons>
                    <OpenCardsIconButton />
                    <OpenSettingsIconButton />
                </NavIcons>
            </Header>
            <S.CardPage>
                <S.Card>
                    <h2>{title}</h2>
                    <CardTags lang={lang} tags={tags} />
                    <Spoiler>{content}</Spoiler>
                    <CardInfo id={card.id} created={created} updated={updated} lang={lang} />
                </S.Card>
            </S.CardPage>
        </>
    )
}
