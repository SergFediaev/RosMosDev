import { S } from 'src/shared/ui/buttonIcon/iconButton.styles.ts'
import { IconSizes } from 'src/shared/ui/buttonIcon/iconButton.types.ts'
import { Icon } from 'src/shared/ui/icon/icon.tsx'

type Props = {
    icon: string
    onClick: () => void
    title: string
    size?: IconSizes
    isSpinning?: boolean
}

export const IconButton = ({ icon, onClick, title, size, isSpinning }: Props) => (
    <S.IconButton onClick={onClick} title={title} size={size} isSpinning={isSpinning}>
        <Icon icon={icon} />
    </S.IconButton>
)
