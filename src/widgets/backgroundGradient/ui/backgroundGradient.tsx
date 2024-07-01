import { S } from 'src/widgets/backgroundGradient/ui/backgroundGradient.styles.ts'
import { selectBackgroundRandomGradient } from 'src/widgets/backgroundGradient/model/backgroundGradient.selectors.ts'
import { useAppSelector } from 'src/app/store.ts'

export const BackgroundGradient = () => {
    const randomGradient = useAppSelector(selectBackgroundRandomGradient)

    return <S.BackgroundGradient randomGradient={randomGradient} />
}
