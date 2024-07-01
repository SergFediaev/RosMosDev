import { Select } from 'src/shared/ui/select/select.tsx'
import { TITLES } from 'src/shared/const'
import { selectCardSorts, selectCardsSort, selectHasSortedCards, setCardsSort } from 'src/entities/card'
import { useAppDispatch, useAppSelector } from 'src/app/store.ts'
import { Sort } from 'src/features/sortCards'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'

export const CardSortsSelect = () => {
    const lang = useAppSelector(selectLang)
    const dispatch = useAppDispatch()
    const cardsSort = useAppSelector(selectCardsSort)
    const cardSorts = useAppSelector(selectCardSorts)
    const hasSortedCards = useAppSelector(selectHasSortedCards)
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
