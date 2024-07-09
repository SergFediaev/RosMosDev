import { S } from 'src/widgets/header/toolbar/toolbar.styles.ts'
import { ReactNode } from 'react'
import { Loading } from 'src/shared/ui/loading/loading.tsx'
import { selectIsCardsLoading } from 'src/entities/card'
import { useAppSelector } from 'src/app/store/store.ts'
import { theme } from 'src/app/styles/theme.ts'

type Props = {
    children: ReactNode
}

// ToDo: Cards toolbar.
export const Toolbar = ({ children }: Props) => {
    const isCardsLoading = useAppSelector(selectIsCardsLoading)

    return isCardsLoading ? <Loading size={theme.sizes.largeFont} /> : <S.Toolbar>{children}</S.Toolbar>
}
