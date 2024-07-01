import { S } from 'src/widgets/backgroundColor/ui/backgroundColor.styles.ts'
import { selectBackgroundColor } from 'src/widgets/backgroundColor/model/backgroundColor.selectors.ts'
import { useAppSelector } from 'src/app/store.ts'

export const BackgroundColor = () => {
    const backgroundColor = useAppSelector(selectBackgroundColor)

    return <S.BackgroundColor backgroundColor={backgroundColor} />
}
