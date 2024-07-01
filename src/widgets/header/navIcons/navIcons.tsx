import { S } from './navIcons.styles.ts'
import { ReactNode, useEffect, useState } from 'react'
import { Icon } from 'src/shared/ui/icon/icon.tsx'
import { EMOJIS, EVENTS, TITLES, VALUES } from 'src/shared/const'
import { useAppSelector } from 'src/app/store.ts'
import { selectLang, selectShowConnectionAlways } from 'src/entities/setting/model/settingSlice.ts'

type Props = {
    children: ReactNode
}

export const NavIcons = ({ children }: Props) => {
    const lang = useAppSelector(selectLang)
    const showConnectionAlways = useAppSelector(selectShowConnectionAlways)
    const [isOnline, setIsOnline] = useState(navigator.onLine)
    const connectionIcon = isOnline ? EMOJIS.POSITIVE : EMOJIS.NEGATIVE
    const connectionTitle = isOnline ? TITLES[lang].ONLINE : TITLES[lang].OFFLINE
    const connectionStatus = (
        <Icon
            icon={connectionIcon}
            iconSize={VALUES.BIG_SIZE}
            title={connectionTitle}
            isIconGlowing
            isIconGlowingColorPositive={isOnline}
        />
    )

    useEffect(() => {
        const onOnline = () => setIsOnline(true)
        const onOffline = () => setIsOnline(false)

        addEventListener(EVENTS.ONLINE, onOnline)
        addEventListener(EVENTS.OFFLINE, onOffline)

        return () => {
            removeEventListener(EVENTS.ONLINE, onOnline)
            removeEventListener(EVENTS.OFFLINE, onOffline)
        }
    }, [])

    return (
        <S.NavIcons>
            {children}
            {showConnectionAlways ? connectionStatus : !isOnline && connectionStatus}
        </S.NavIcons>
    )
}
