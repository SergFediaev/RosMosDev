import { S } from './button.styles.ts'
import { Loading } from 'src/shared/ui/loading/loading.tsx'
import { ButtonAlign } from 'src/shared/ui/button/button.types.ts'

type Props = {
    name: string
    onClick: () => void
    align?: ButtonAlign
    isDisabled?: boolean
    isLoading?: boolean
    isWarning?: boolean
}

// ToDo: undefined on click.
export const Button = ({ name, onClick, isLoading, ...restProps }: Props) => (
    <S.Button onClick={isLoading ? undefined : onClick} isLoading={isLoading} {...restProps}>
        {isLoading ? <Loading /> : name}
    </S.Button>
)
