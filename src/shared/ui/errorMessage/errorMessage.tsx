import { S } from './errorMessage.styles.ts'
import { SYMBOLS } from 'src/shared/const'

type Props = {
    error: string
}

export const ErrorMessage = ({ error }: Props) => <S.ErrorMessage>{`${SYMBOLS.WARNING} ${error}`}</S.ErrorMessage>
