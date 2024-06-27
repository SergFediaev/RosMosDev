import { S } from 'src/widgets/backgroundGradient/ui/backgroundGradient.styles.ts'
import { useSelector } from 'react-redux'
import { selectBackgroundRandomGradient } from 'src/widgets/backgroundGradient/model/backgroundGradient.selectors.ts'

export const BackgroundGradient = () => {
    const randomGradient = useSelector(selectBackgroundRandomGradient)

    return <S.BackgroundGradient randomGradient={randomGradient} />
}
