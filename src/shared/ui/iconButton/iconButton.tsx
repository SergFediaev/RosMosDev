import { S } from './iconButton.styles.ts'
import { Icon } from 'src/shared/ui/icon/icon.tsx'
import { IconSizes } from 'src/shared/ui/iconButton/iconButton.types.ts'

type Props = {
    icon: string
    onClick: () => void
    title?: string
    iconSize?: IconSizes
    isIconSpinning?: boolean
}

export const IconButton = ({ onClick, title, ...restIconProps }: Props) => (
    <S.IconButton onClick={onClick} title={title}>
        <Icon {...restIconProps} />
    </S.IconButton>
)
