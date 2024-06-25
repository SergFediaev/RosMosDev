import { S } from './floatingButton.styles.ts'

type Props = {
    icon: string
    onClick: () => void
    title: string
}

export const FloatingButton = ({ icon, onClick, title }: Props) => (
    <S.FloatingButton onClick={onClick} title={title}>
        {icon}
    </S.FloatingButton>
)
