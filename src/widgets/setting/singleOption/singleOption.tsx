import { S } from 'src/widgets/setting/singleOption/singleOption.styles.ts'
import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const SingleOption = ({ children }: Props) => <S.SingleOption>{children}</S.SingleOption>
