import { S } from 'src/widgets/backgroundColor/backgroundColor.styles.ts'
import { useAppSelector } from 'src/app/store.ts'
import { selectBackgroundColor } from 'src/entities/background/model/backgroundSlice.ts'

export const BackgroundColor = () => {
    const backgroundColor = useAppSelector(selectBackgroundColor)

    return <S.BackgroundColor backgroundColor={backgroundColor} />
}
