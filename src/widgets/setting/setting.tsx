import { S } from './setting.styles.ts'
import { ReactNode } from 'react'

type Props = {
    name: string
    children: ReactNode
}

export const Setting = ({ name, children }: Props) => (
    <S.Setting>
        <S.Name>{name}</S.Name>
        {children}
    </S.Setting>
)
