import { S } from './icon.styles.ts'
import { IconSizes } from 'src/shared/ui/iconButton/iconButton.types.ts'

type Props = {
    icon: string
    iconSize?: IconSizes
    title?: string
    isIconSpinning?: boolean
    isIconGlowing?: boolean
    isIconGlowingColorPositive?: boolean
}

export const Icon = ({ icon, ...rest }: Props) => <S.Icon {...rest}>{icon}</S.Icon>
