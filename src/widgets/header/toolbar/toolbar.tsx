import { useSelector } from 'react-redux'
import { useAppDispatch } from 'src/app/store.ts'
import { selectHasSortedCards, Sort } from 'src/features/sortCards'
import { Filter } from 'src/features/filterCards'
import { Search } from 'src/widgets/search/search.tsx'
import { Select } from 'src/shared/ui/select/select.tsx'
import { TITLES, VALUES } from 'src/shared/const'
import { selectCards, selectHasCardFilters, setCardsFilter, setCardsSort } from 'src/entities/card'

export const Toolbar = () => {
    const dispatch = useAppDispatch()
    const cards = useSelector(selectCards)
    const hasSortedCards = useSelector(selectHasSortedCards)
    const hasCardFilters = useSelector(selectHasCardFilters)
    const lang = VALUES.RU

    const onSelectSort = (sort: Sort) => dispatch(setCardsSort({ sort }))
    const onSelectFilter = (filter: Filter) => dispatch(setCardsFilter({ filter }))

    return (
        <>
            <Search />
            {hasSortedCards && (
                <Select
                    options={cards.sorts}
                    selectedOption={cards.sort.label}
                    onSelect={onSelectSort}
                    title={TITLES[lang].CARD_SORTING}
                />
            )}
            {hasCardFilters && (
                <Select
                    options={cards.filters}
                    selectedOption={cards.filter.label}
                    onSelect={onSelectFilter}
                    title={TITLES[lang].CARD_CATEGORIES}
                />
            )}
        </>
    )
}
