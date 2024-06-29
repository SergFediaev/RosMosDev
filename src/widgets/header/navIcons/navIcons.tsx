import { S } from './navIcons.styles.ts'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const NavIcons = ({ children }: Props) => <S.NavIcons>{children}</S.NavIcons>
