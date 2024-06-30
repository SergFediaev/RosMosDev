import { useAppDispatch } from 'src/app/store.ts'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { Header } from 'src/widgets/header/header.tsx'
import { fetchCards, selectHasCards } from 'src/entities/card'
import { Toolbar } from 'src/pages/dashboard/dashboardHeader/toolbar/toolbar.tsx'
import { LogoAcronym } from 'src/shared/ui/logoAcronym/logoAcronym.tsx'
import { Search } from 'src/widgets/search/search.tsx'
import { CardFiltersSelect } from 'src/widgets/cardFiltersSelect/cardFiltersSelect.tsx'
import { CardsModeIconButton } from 'src/widgets/cardsModeIconButton/cardsModeIconButton.tsx'
import { CardSortsSelect } from 'src/widgets/cardSortsSelect/cardSortsSelect.tsx'
import { CardsContainer } from 'src/pages/cardsPage/cardsContainer/cardsContainer.tsx'
import { OpenSettingsIconButton } from 'src/widgets/openSettingsIconButton/openSettingsIconButton.tsx'
import { NavIcons } from 'src/widgets/header/navIcons/navIcons.tsx'

export const CardsPage = () => {
    const lang = useSelector(selectLang)
    const dispatch = useAppDispatch()
    const hasCards = useSelector(selectHasCards)

    useEffect(() => {
        if (!hasCards) dispatch(fetchCards(lang))
    }, [dispatch, hasCards, lang])

    return (
        <>
            <Header>
                <Toolbar>
                    <LogoAcronym />
                    <Search />
                    <CardSortsSelect />
                    <CardFiltersSelect />
                    <CardsModeIconButton />
                </Toolbar>
                <NavIcons>
                    <OpenSettingsIconButton />
                </NavIcons>
            </Header>
            <CardsContainer />
        </>
    )
}
