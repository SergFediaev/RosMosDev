import { Header } from 'src/widgets/header/header.tsx'
import { Toolbar } from 'src/widgets/header/toolbar/toolbar.tsx'
import { LogoAcronym } from 'src/shared/ui/logoAcronym/logoAcronym.tsx'
import { Search } from 'src/widgets/search/search.tsx'
import { CardFiltersSelect } from 'src/widgets/cardFiltersSelect/cardFiltersSelect.tsx'
import { CardsModeIconButton } from 'src/widgets/cardsModeIconButton/cardsModeIconButton.tsx'
import { CardSortsSelect } from 'src/widgets/cardSortsSelect/cardSortsSelect.tsx'
import { CardsContainer } from 'src/pages/cardsPage/cardsContainer/cardsContainer.tsx'
import { OpenSettingsIconButton } from 'src/widgets/openSettingsIconButton/openSettingsIconButton.tsx'
import { NavIcons } from 'src/widgets/header/navIcons/navIcons.tsx'
import { OpenProfileIconButton } from 'src/widgets/openProfileIconButton/openProfileIconButton.tsx'
import { CreateCardIconButton } from 'src/widgets/createCardIconButton/createCardIconButton.tsx'

export const CardsPage = () => (
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
                <OpenProfileIconButton />
                <CreateCardIconButton />
                <OpenSettingsIconButton />
            </NavIcons>
        </Header>
        <CardsContainer />
    </>
)
