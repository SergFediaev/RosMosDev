import { S } from 'src/widgets/header/header.styles.ts'
import { Search } from 'src/widgets/search/search.tsx'
import { Logo } from 'src/widgets/header/logo/logo.tsx'
import { useSelector } from 'react-redux'
import { selectIsCardsLoading } from 'src/entities/card/model/card.selectors.ts'
import { Select } from 'src/shared/ui/select/select.tsx'
import { useState } from 'react'

export const Header = () => {
    const isCardsLoading = useSelector(selectIsCardsLoading)
    const defaultSort = 'Алфавит (от А до Я)'
    const [sort, setSort] = useState(defaultSort)
    const onSelectSort = (option: string) => setSort(option)

    return (
        <S.Header>
            <Logo isCardsLoading={isCardsLoading} />
            {!isCardsLoading && (
                <>
                    <Search />
                    <Select
                        options={[defaultSort, 'Алфавит (от Я до А)', 'Лайки (возрастание)', 'Лайки (убывание)']}
                        selectedOption={sort}
                        onSelect={onSelectSort}
                    />
                </>
            )}
        </S.Header>
    )
}
