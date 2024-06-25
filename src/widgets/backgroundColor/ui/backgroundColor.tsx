import { S } from 'src/widgets/backgroundColor/ui/backgroundColor.styles.ts'
import { useSelector } from 'react-redux'
import { selectBackgroundColor } from 'src/widgets/backgroundColor/model/backgroundColor.selectors.ts'

export const BackgroundColor = () => {
    const backgroundColor = useSelector(selectBackgroundColor)

    return <S.BackgroundColor backgroundColor={backgroundColor} />
}
