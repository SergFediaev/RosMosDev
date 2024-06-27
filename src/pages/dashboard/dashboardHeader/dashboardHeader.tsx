import { S } from './dashboardHeader.styles.ts'
import { useSelector } from 'react-redux'
import { selectIsCardsLoading } from 'src/entities/card/model/card.selectors.ts'
import { Toolbar } from 'src/pages/dashboard/dashboardHeader/toolbar/toolbar.tsx'
import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'
import { EMOJIS, PATHS, TITLES, VALUES } from 'src/shared/const'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { useNavigate } from 'react-router-dom'
import { Loading } from 'src/shared/ui/loading/loading.tsx'

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
            {isCardsLoading ? <Loading size={VALUES.LARGE_SIZE} /> : <Toolbar />}
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
