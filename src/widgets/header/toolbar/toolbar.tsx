import { useSelector } from 'react-redux'
import { useAppDispatch } from 'src/app/store.ts'
import { selectCards, setCardsFilter, setCardsSort } from 'src/entities/card'
import { selectSortedCards, Sort } from 'src/features/sortCards'
import { Filter } from 'src/features/filterCards'
import { Search } from 'src/widgets/search/search.tsx'
import { Select } from 'src/shared/ui/select/select.tsx'

export const Toolbar = () => {
    const dispatch = useAppDispatch()
    const cards = useSelector(selectCards)
    const hasCards = useSelector(selectSortedCards).length > 1

    const onSelectSort = (sort: Sort) => dispatch(setCardsSort({ sort }))
    const onSelectFilter = (filter: Filter) => dispatch(setCardsFilter({ filter }))

    return (
        <>
            <Search />
            {hasCards && <Select options={cards.sorts} selectedOption={cards.sort.label} onSelect={onSelectSort} />}
            <Select options={cards.filters} selectedOption={cards.filter.label} onSelect={onSelectFilter} />
        </>
    )
}
