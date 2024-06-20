import { Search } from 'src/widgets/search/search.tsx'
import { Option, Select } from 'src/shared/ui/select/select.tsx'
import { VALUES } from 'src/shared/const'
import { useAppDispatch } from 'src/app/store.ts'
import { findCardsSortLabel, getSortOptions, selectSortedCards, Sort } from 'src/features/sortCards'
import { filterCards, sortCards } from 'src/entities/card/model/cardSlice.ts'
import { useSelector } from 'react-redux'
import { selectCardsFilter, selectCardsSort } from 'src/entities/card/model/card.selectors.ts'
import { cardFilters, findCardsFilterLabel, getFilterOptions } from 'src/features/filterCards'

export const Toolbar = () => {
    const lang = VALUES.EN
    const dispatch = useAppDispatch()
    const hasCards = useSelector(selectSortedCards).length > 1

    const onSelectSort = (option: Option<Sort>) => dispatch(sortCards({ sort: option.value }))
    const cardsSorts = getSortOptions(lang)
    const selectedSort = findCardsSortLabel(cardsSorts, useSelector(selectCardsSort))

    const onSelectFilter = (option: Option<string>) => dispatch(filterCards({ filter: option.value }))
    const cardsFilters = getFilterOptions(cardFilters().filters, lang)
    const selectedFilter = findCardsFilterLabel(cardsFilters, useSelector(selectCardsFilter))

    return (
        <>
            <Search />
            {hasCards && <Select options={cardsSorts} selectedOption={selectedSort} onSelect={onSelectSort} />}
            <Select options={cardsFilters} selectedOption={selectedFilter} onSelect={onSelectFilter} />
        </>
    )
}
