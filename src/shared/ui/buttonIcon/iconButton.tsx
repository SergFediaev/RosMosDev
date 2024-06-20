import { S } from 'src/shared/ui/buttonIcon/iconButton.styles.ts'
import { IconSizes } from 'src/shared/ui/buttonIcon/iconButton.types.ts'

type Props = {
    icon: string
    onClick: () => void
    title: string
    size?: IconSizes
}

export const IconButton = ({ icon, onClick, title, size }: Props) => (
    <S.IconButton onClick={onClick} title={title} size={size}>
        {icon}
    </S.IconButton>
)
