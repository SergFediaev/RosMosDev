import { S } from './field.styles.ts'
import { TYPES } from 'src/shared/const'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

type Props = ComponentPropsWithoutRef<typeof TYPES.INPUT> & {
    error?: string
    as?: typeof TYPES.TEXTAREA
}

export const Field = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { error, ...restFieldProps } = props

    return (
        <S.Container>
            <S.Field type={TYPES.TEXT} ref={ref} {...restFieldProps} />
            {error && <S.Error>{error}</S.Error>}
        </S.Container>
    )
})
