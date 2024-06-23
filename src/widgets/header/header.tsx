import { S } from 'src/widgets/header/header.styles.ts'
import { Logo } from 'src/widgets/header/logo/logo.tsx'
import { useSelector } from 'react-redux'
import { selectIsCardsLoading } from 'src/entities/card/model/card.selectors.ts'
import { Toolbar } from 'src/widgets/header/toolbar/toolbar.tsx'
import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'
import { EMOJIS, TITLES, VALUES } from 'src/shared/const'

export const Header = () => {
    const isCardsLoading = useSelector(selectIsCardsLoading)

    return (
        <S.Header>
            <S.Tools>
                <Logo isCardsLoading={isCardsLoading} />
                {!isCardsLoading && <Toolbar />}
            </S.Tools>
            <S.Actions>
                <IconButton
                    icon={EMOJIS.SETTINGS}
                    onClick={() => {}}
                    title={TITLES[VALUES.EN].OPEN_SETTINGS}
                    size={VALUES.MEDIUM_SIZE}
                    isSpinning
                />
            </S.Actions>
        </S.Header>
    )
}
