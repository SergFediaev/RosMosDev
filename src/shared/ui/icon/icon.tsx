import { S } from './icon.styles.ts'
import { IconSizes } from 'src/shared/ui/buttonIcon/iconButton.types.ts'

type Props = {
    icon: string
    iconSize?: IconSizes
    isIconSpinning?: boolean
}

export const Icon = ({ icon, ...rest }: Props) => <S.Icon {...rest}>{icon}</S.Icon>
