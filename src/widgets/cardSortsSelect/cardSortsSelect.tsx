import { Select } from 'src/shared/ui/select/select.tsx'
import { TITLES } from 'src/shared/const'
import { useSelector } from 'react-redux'
import { selectHasSortedCards, Sort } from 'src/features/sortCards'
import { selectCardSorts, selectCardsSort, setCardsSort } from 'src/entities/card'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { useAppDispatch } from 'src/app/store.ts'

export const CardSortsSelect = () => {
    const lang = useSelector(selectLang)
    const dispatch = useAppDispatch()
    const cardsSort = useSelector(selectCardsSort)
    const cardSorts = useSelector(selectCardSorts)
    const hasSortedCards = useSelector(selectHasSortedCards)
    const onSelectSort = (sort: Sort) => dispatch(setCardsSort({ sort }))

    if (!hasSortedCards) return

    return (
        <Select
            options={cardSorts}
            selectedOption={cardsSort.label}
            onSelect={onSelectSort}
            title={TITLES[lang].CARD_SORTING}
        />
    )
}
