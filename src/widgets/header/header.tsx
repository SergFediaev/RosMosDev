import { S } from 'src/widgets/header/header.styles.ts'
import { Logo } from 'src/widgets/header/logo/logo.tsx'
import { useSelector } from 'react-redux'
import { selectIsCardsLoading } from 'src/entities/card/model/card.selectors.ts'
import { Toolbar } from 'src/widgets/header/toolbar/toolbar.tsx'

export const Header = () => {
    const isCardsLoading = useSelector(selectIsCardsLoading)

    return (
        <S.Header>
            <Logo isCardsLoading={isCardsLoading} />
            {!isCardsLoading && <Toolbar />}
        </S.Header>
    )
}
