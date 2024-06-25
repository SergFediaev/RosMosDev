import { useSelector } from 'react-redux'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { useNavigate } from 'react-router-dom'
import { EMOJIS, PATHS, SYMBOLS, TEXTS, TITLES, VALUES } from 'src/shared/const'
import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'
import { S } from 'src/pages/dashboard/dashboardHeader/dashboardHeader.styles.ts'

// ToDo: Styled header component.

export const SettingsHeader = () => {
    const lang = useSelector(selectLang)
    const navigate = useNavigate()
    const openDashboard = () => navigate(PATHS.ROOT)

    return (
        <S.DashboardHeader isMenuOpen>
            <h1>
                {TEXTS[lang].APP_NAME} {SYMBOLS.SLASH} {TEXTS[lang].SETTINGS}
            </h1>
            <IconButton
                icon={EMOJIS.HOME}
                onClick={openDashboard}
                title={TITLES[lang].OPEN_DASHBOARD}
                size={VALUES.MEDIUM_SIZE}
            />
        </S.DashboardHeader>
    )
}
