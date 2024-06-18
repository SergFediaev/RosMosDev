import { S } from 'src/shared/ui/buttonIcon/iconButton.styles.ts'

type Props = {
    icon: string
    onClick: () => void
    title: string
}

export const IconButton = ({ icon, onClick, title }: Props) => (
    <S.IconButton onClick={onClick} title={title}>
        {icon}
    </S.IconButton>
)
