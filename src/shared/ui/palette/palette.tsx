import { S } from './palette.styles.ts'

type Props = {
    colors: string[]
    onClick: (color: string) => void
}

export const Palette = ({ colors, onClick }: Props) => (
    <S.Palette>
        {colors.map(color => (
            <S.Color key={color} color={color} onClick={() => onClick(color)} />
        ))}
    </S.Palette>
)
