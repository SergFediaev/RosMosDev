import { S } from 'src/shared/ui/buttonIcon/iconButton.styles.ts'
import { IconSizes } from 'src/shared/ui/buttonIcon/iconButton.types.ts'
import { Icon } from 'src/shared/ui/icon/icon.tsx'

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
