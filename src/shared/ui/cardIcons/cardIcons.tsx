import { S } from './cardIcons.styles.ts'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const CardIcons = ({ children }: Props) => <S.CardIcons>{children}</S.CardIcons>
