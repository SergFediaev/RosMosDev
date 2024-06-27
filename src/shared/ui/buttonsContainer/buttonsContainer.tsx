import { S } from './buttonsContainer.styles.ts'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const ButtonsContainer = ({ children }: Props) => <S.ButtonsContainer>{children}</S.ButtonsContainer>
