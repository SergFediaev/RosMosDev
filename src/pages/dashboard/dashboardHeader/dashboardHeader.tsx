import { S } from './dashboardHeader.styles.ts'
import { Logo } from 'src/pages/dashboard/dashboardHeader/logo/logo.tsx'
import { useSelector } from 'react-redux'
import { selectIsCardsLoading } from 'src/entities/card/model/card.selectors.ts'
import { Toolbar } from 'src/pages/dashboard/dashboardHeader/toolbar/toolbar.tsx'
import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'
import { EMOJIS, PATHS, TITLES, VALUES } from 'src/shared/const'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { useNavigate } from 'react-router-dom'

type Props = {
    isMenuOpen: boolean
}

export const DashboardHeader = ({ isMenuOpen }: Props) => {
    const lang = useSelector(selectLang)
    const isCardsLoading = useSelector(selectIsCardsLoading)
    const navigate = useNavigate()
    const openSettings = () => navigate(PATHS.SETTINGS)

    return (
        <S.DashboardHeader isMenuOpen={isMenuOpen}>
            <S.Tools>
                <Logo isCardsLoading={isCardsLoading} />
                {!isCardsLoading && <Toolbar />}
            </S.Tools>
            <S.Actions>
                <IconButton
                    icon={EMOJIS.SETTINGS}
                    onClick={openSettings}
                    title={TITLES[lang].OPEN_SETTINGS}
                    size={VALUES.MEDIUM_SIZE}
                    isSpinning
                />
            </S.Actions>
        </S.DashboardHeader>
    )
}
