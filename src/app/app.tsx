import { useSelector } from 'react-redux'
import { selectIsMarkupEnabled } from 'src/entities/setting/model/setting.selectors.ts'
import { S } from './app.styles.ts'
import { Outlet } from 'react-router-dom'

export const App = () => {
    const isMarkupEnabled = useSelector(selectIsMarkupEnabled)

    return (
        <S.App isMarkupEnabled={isMarkupEnabled}>
            <Outlet />
        </S.App>
    )
}
