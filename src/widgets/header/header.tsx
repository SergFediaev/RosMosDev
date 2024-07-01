import { S } from 'src/widgets/header/header.styles.ts'
import { ReactNode, useEffect, useState } from 'react'
import { theme } from 'src/app/styles/theme.ts'
import { EMOJIS, EVENTS, TITLES } from 'src/shared/const'
import { MenuButton } from 'src/shared/ui/menuButton/menuButton.tsx'
import { useAppSelector } from 'src/app/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'

type Props = {
    children: ReactNode
}

export const Header = ({ children }: Props) => {
    const lang = useAppSelector(selectLang)
    const [isMenuOpen, setIsMenuOpen] = useState(innerWidth > theme.breakpoints.tablet)
    const menuButtonTitle = isMenuOpen ? TITLES[lang].CLOSE_MENU : TITLES[lang].OPEN_MENU
    const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen)

    useEffect(() => {
        const onWindowResize = () =>
            innerWidth < theme.breakpoints.tablet ? setIsMenuOpen(false) : setIsMenuOpen(true)

        addEventListener(EVENTS.RESIZE, onWindowResize)
        return () => removeEventListener(EVENTS.RESIZE, onWindowResize)
    }, [])

    return (
        <>
            <S.Header isMenuOpen={isMenuOpen}>{children}</S.Header>
            <MenuButton icon={EMOJIS.MENU} onClick={toggleIsMenuOpen} title={menuButtonTitle} />
        </>
    )
}
