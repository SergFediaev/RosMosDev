import { Select } from 'src/shared/ui/select/select.tsx'
import { TITLES } from 'src/shared/const'
import { Filter } from 'src/features/filterCards'
import { selectCardFilters, selectCardsFilter, selectHasCardFilters, setCardsFilter } from 'src/entities/card'
import { useAppDispatch } from 'src/app/store.ts'
import { useSelector } from 'react-redux'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'

export const CardFiltersSelect = () => {
    const lang = useSelector(selectLang)
    const dispatch = useAppDispatch()
    const cardsFilter = useSelector(selectCardsFilter)
    const cardFilters = useSelector(selectCardFilters)
    const hasCardFilters = useSelector(selectHasCardFilters)
    const onSelectFilter = (filter: Filter) => dispatch(setCardsFilter({ filter }))

    if (!hasCardFilters) return

    return (
        <Select
            options={cardFilters}
            selectedOption={cardsFilter.label}
            onSelect={onSelectFilter}
            title={TITLES[lang].CARD_CATEGORIES}
        />
    )
}
