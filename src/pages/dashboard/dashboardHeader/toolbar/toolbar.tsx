import { S } from './toolbar.styles.ts'
import { ReactNode } from 'react'
import { Loading } from 'src/shared/ui/loading/loading.tsx'
import { VALUES } from 'src/shared/const'
import { useSelector } from 'react-redux'
import { selectIsCardsLoading } from 'src/entities/card'

type Props = {
    children: ReactNode
}

// ToDo: Cards toolbar.
export const Toolbar = ({ children }: Props) => {
    const isCardsLoading = useSelector(selectIsCardsLoading)

    return isCardsLoading ? <Loading size={VALUES.LARGE_SIZE} /> : <S.Toolbar>{children}</S.Toolbar>
}
