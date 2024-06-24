import { S } from 'src/widgets/setting/descriptionOption/descriptionOption.styles.ts'
import { ReactNode } from 'react'

type Props = {
    description: string
    children: ReactNode
}

export const DescriptionOption = ({ description, children }: Props) => (
    <S.Option>
        <S.Description>{description}</S.Description>
        {children}
    </S.Option>
)
