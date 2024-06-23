import { S } from './icon.styles.ts'

type Props = {
    icon: string
}

export const Icon = ({ icon }: Props) => <S.Icon>{icon}</S.Icon>
