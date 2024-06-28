import { S } from 'src/pages/dashboard/dashboard.styles.ts'
import { Cards } from 'src/pages/dashboard/cards/cards.tsx'
import { useAppDispatch } from 'src/app/store.ts'
import { fetchCards } from 'src/entities/card/model/cardSlice.ts'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { selectSortedCards } from 'src/features/sortCards'
import { EMOJIS, EVENTS, TEXTS, TITLES } from 'src/shared/const'
import { selectCardsError, selectIsCardsLoading } from 'src/entities/card/model/card.selectors.ts'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { DashboardHeader } from 'src/pages/dashboard/dashboardHeader/dashboardHeader.tsx'
import { MenuButton } from 'src/shared/ui/menuButton/menuButton.tsx'
import { theme } from 'src/app/styles/theme.ts'
import { ErrorMessage } from 'src/shared/ui/errorMessage/errorMessage.tsx'

export const Dashboard = () => {
    const lang = useSelector(selectLang)
    const cards = useSelector(selectSortedCards)
    const dispatch = useAppDispatch()
    const hasCards = cards.length
    const isCardsLoading = useSelector(selectIsCardsLoading)
    const [isMenuOpen, setIsMenuOpen] = useState(innerWidth > theme.breakpoints.tablet)
    const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen)
    const menuButtonTitle = isMenuOpen ? TITLES[lang].CLOSE_MENU : TITLES[lang].OPEN_MENU
    const cardsError = useSelector(selectCardsError)

    useEffect(() => {
        dispatch(fetchCards(lang))

        const onWindowResize = () =>
            innerWidth < theme.breakpoints.tablet ? setIsMenuOpen(false) : setIsMenuOpen(true)

        addEventListener(EVENTS.RESIZE, onWindowResize)
        return () => removeEventListener(EVENTS.RESIZE, onWindowResize)
    }, [dispatch, lang])

    // ToDo: Refactor JSX.
    return (
        <>
            <DashboardHeader isMenuOpen={isMenuOpen} />
            {!isCardsLoading && (
                <S.Dashboard>
                    {cardsError ? (
                        <ErrorMessage>{cardsError}</ErrorMessage>
                    ) : hasCards ? (
                        <Cards cards={cards} />
                    ) : (
                        TEXTS[lang].CARDS_NOT_FOUND
                    )}
                </S.Dashboard>
            )}
            <MenuButton icon={EMOJIS.MENU} onClick={toggleIsMenuOpen} title={menuButtonTitle} />
        </>
    )
}
