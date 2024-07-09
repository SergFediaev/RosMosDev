import { S } from './iconButton.styles.ts'
import { Icon } from 'src/shared/ui/icon/icon.tsx'

type Props = {
    icon: string
    onClick: () => void
    title?: string
    iconSize?: string
    isIconSpinning?: boolean
}

export const IconButton = ({ onClick, title, ...restIconProps }: Props) => (
    <S.IconButton onClick={onClick} title={title}>
        <Icon {...restIconProps} />
    </S.IconButton>
)
