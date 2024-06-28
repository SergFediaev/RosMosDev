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
export const Button = ({ name, onClick, ...rest }: Props) => (
    <S.Button onClick={rest.isLoading ? undefined : onClick} {...rest}>
        {rest.isLoading ? <Loading /> : name}
    </S.Button>
)
