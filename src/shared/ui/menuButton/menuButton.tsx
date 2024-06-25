import { S } from './menuButton.styles.ts'

type Props = {
    icon: string
    onClick: () => void
    title: string
}

export const MenuButton = ({ icon, onClick, title }: Props) => (
    <S.MenuButton onClick={onClick} title={title}>
        {icon}
    </S.MenuButton>
)
