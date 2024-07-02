import { S } from './backgroundRandomGradient.styles.ts'
import { useAppSelector } from 'src/app/store/store.ts'
import { selectBackgroundRandomGradient } from 'src/entities/background/model/backgroundSlice.ts'

export const BackgroundRandomGradient = () => {
    const randomGradient = useAppSelector(selectBackgroundRandomGradient)

    return <S.BackgroundRandomGradient randomGradient={randomGradient} />
}
