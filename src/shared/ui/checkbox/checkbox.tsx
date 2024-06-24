import { S } from './checkbox.styles.ts'

type Props = {
    value: boolean
    onChange: (value: boolean) => void
}

export const Checkbox = ({ value, onChange }: Props) => (
    <S.Checkbox onClick={() => onChange(!value)} isChecked={value} />
)
