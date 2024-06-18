import { S } from 'src/widgets/header/header.styles.ts'
import { Search } from 'src/widgets/search/search.tsx'
import { Logo } from 'src/widgets/header/logo/logo.tsx'
import { useSelector } from 'react-redux'
import { selectIsCardsLoading } from 'src/entities/card/model/card.selectors.ts'

export const Header = () => {
    const isCardsLoading = useSelector(selectIsCardsLoading)

    return (
        <S.Header>
            <Logo isCardsLoading={isCardsLoading} />
            {!isCardsLoading && <Search />}
        </S.Header>
    )
}
