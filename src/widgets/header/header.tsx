import { S } from 'src/widgets/header/header.styles.ts'
import { Search } from 'src/widgets/search/search.tsx'
import { Logo } from 'src/widgets/header/logo/logo.tsx'
import { useSelector } from 'react-redux'
import { selectCardsSort, selectIsCardsLoading } from 'src/entities/card/model/card.selectors.ts'
import { Option, Select } from 'src/shared/ui/select/select.tsx'
import { findCardsSortLabel, getSortOptions, Sort } from 'src/features/sortCards'
import { sortCards } from 'src/entities/card/model/cardSlice.ts'
import { VALUES } from 'src/shared/const'
import { useAppDispatch } from 'src/app/store.ts'

export const Header = () => {
    const isCardsLoading = useSelector(selectIsCardsLoading)
    const lang = VALUES.EN
    const dispatch = useAppDispatch()
    const onSelectSort = (option: Option<Sort>) => dispatch(sortCards({ sort: option.value }))
    const cardsSorts = getSortOptions(lang)
    const selectedSort = findCardsSortLabel(cardsSorts, useSelector(selectCardsSort))

    return (
        <S.Header>
            <Logo isCardsLoading={isCardsLoading} />
            {!isCardsLoading && (
                <>
                    <Search />
                    <Select options={cardsSorts} selectedOption={selectedSort} onSelect={onSelectSort} />
                </>
            )}
        </S.Header>
    )
}
