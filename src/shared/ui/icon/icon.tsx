import { S } from './icon.styles.ts'

type Props = {
    icon: string
    iconSize?: string
    title?: string
    isIconSpinning?: boolean
    isIconGlowing?: boolean
    isIconGlowingColorPositive?: boolean
}

export const Icon = ({ icon, ...rest }: Props) => <S.Icon {...rest}>{icon}</S.Icon>
