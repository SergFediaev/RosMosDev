import { S } from './iconsContainer.styles.ts'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const IconsContainer = ({ children }: Props) => <S.IconsContainer>{children}</S.IconsContainer>
