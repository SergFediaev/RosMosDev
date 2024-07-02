import { S } from './toolbar.styles.ts'
import { ReactNode } from 'react'
import { Loading } from 'src/shared/ui/loading/loading.tsx'
import { VALUES } from 'src/shared/const'
import { selectIsCardsLoading } from 'src/entities/card'
import { useAppSelector } from 'src/app/store/store.ts'

type Props = {
    children: ReactNode
}

// ToDo: Cards toolbar.
export const Toolbar = ({ children }: Props) => {
    const isCardsLoading = useAppSelector(selectIsCardsLoading)

    return isCardsLoading ? <Loading size={VALUES.LARGE_SIZE} /> : <S.Toolbar>{children}</S.Toolbar>
}
