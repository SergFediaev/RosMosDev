import { S } from './colorPicker.styles.ts'
import { TYPES } from 'src/shared/const'

type Props = {
    value: string
    onChange: (value: string) => void
}

export const ColorPicker = ({ value, onChange }: Props) => (
    <S.ColorPicker type={TYPES.COLOR} value={value} onChange={event => onChange(event.currentTarget.value)} />
)
