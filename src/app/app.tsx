import { useSelector } from 'react-redux'
import { selectIsMarkupEnabled } from 'src/entities/setting/model/setting.selectors.ts'
import { S } from './app.styles.ts'
import { Outlet } from 'react-router-dom'
import { Background } from 'src/widgets/background/ui/background.tsx'

export const App = () => {
    const isMarkupEnabled = useSelector(selectIsMarkupEnabled)

    return (
        <S.App isMarkupEnabled={isMarkupEnabled}>
            <Background />
            <Outlet />
        </S.App>
    )
}
