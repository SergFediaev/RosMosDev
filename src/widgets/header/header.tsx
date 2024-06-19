import { S } from 'src/widgets/header/header.styles.ts'
import { Search } from 'src/widgets/search/search.tsx'
import { Logo } from 'src/widgets/header/logo/logo.tsx'
import { useSelector } from 'react-redux'
import { Option, Select } from 'src/shared/ui/select/select.tsx'
import { findCardsSortLabel, getSortOptions, Sort } from 'src/features/sortCards'
import { VALUES } from 'src/shared/const'
import { useAppDispatch } from 'src/app/store.ts'
import { getFilterOptions } from 'src/features/filterCards/lib/getFilterOptions.ts'
import { cardFilters } from 'src/features/filterCards/model/cardFilters.ts'
import { filterCards, sortCards } from 'src/entities/card/model/cardSlice.ts'
import { findCardsFilterLabel } from 'src/features/filterCards/lib/findCardsFilterLabel.ts'
import { selectCardsFilter, selectCardsSort, selectIsCardsLoading } from 'src/entities/card/model/card.selectors.ts'

export const Header = () => {
    const isCardsLoading = useSelector(selectIsCardsLoading)
    const lang = VALUES.EN
    const dispatch = useAppDispatch()

    const onSelectSort = (option: Option<Sort>) => dispatch(sortCards({ sort: option.value }))
    const cardsSorts = getSortOptions(lang)
    const selectedSort = findCardsSortLabel(cardsSorts, useSelector(selectCardsSort))

    const onSelectFilter = (option: Option<string>) => dispatch(filterCards({ filter: option.value }))
    const cardsFilters = getFilterOptions(cardFilters.getFilters(), lang)
    const selectedFilter = findCardsFilterLabel(cardsFilters, useSelector(selectCardsFilter))

    return (
        <S.Header>
            <Logo isCardsLoading={isCardsLoading} />
            {!isCardsLoading && (
                <>
                    <Search />
                    <Select options={cardsSorts} selectedOption={selectedSort} onSelect={onSelectSort} />
                    <Select options={cardsFilters} selectedOption={selectedFilter} onSelect={onSelectFilter} />
                </>
            )}
        </S.Header>
    )
}
