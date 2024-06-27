import { S } from './errorMessage.styles.ts'
import { ReactNode } from 'react'
import { SYMBOLS } from 'src/shared/const'

type Props = {
    children: ReactNode
}

export const ErrorMessage = ({ children }: Props) => (
    <S.ErrorMessage>
        {SYMBOLS.WARNING}
        {SYMBOLS.SPACE}
        {children}
    </S.ErrorMessage>
)
