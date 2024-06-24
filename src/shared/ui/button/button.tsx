import { S } from './button.styles.ts'

type Props = {
    name: string
    onClick: () => void
    isDisabled?: boolean
    isLoading?: boolean
    isWarning?: boolean
}

export const Button = ({ name, onClick, isDisabled, isLoading, isWarning }: Props) => (
    <S.Button onClick={onClick} isDisabled={isDisabled} isLoading={isLoading} isWarning={isWarning}>
        {name}
    </S.Button>
)
