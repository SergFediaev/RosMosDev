import { S } from './form.styles.ts'
import { FormEvent, ReactNode } from 'react'

type Props = {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
    children: ReactNode
}

export const Form = ({ onSubmit, children }: Props) => <S.Form onSubmit={onSubmit}>{children}</S.Form>
