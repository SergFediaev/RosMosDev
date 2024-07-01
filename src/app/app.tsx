import { S } from './app.styles.ts'
import { Outlet } from 'react-router-dom'
import { Background } from 'src/widgets/background/ui/background.tsx'
import { useAppSelector } from 'src/app/store.ts'
import { selectIsMarkupEnabled } from 'src/entities/setting/model/settingSlice.ts'

export const App = () => {
    const isMarkupEnabled = useAppSelector(selectIsMarkupEnabled)

    return (
        <S.App isMarkupEnabled={isMarkupEnabled}>
            <Background />
            <Outlet />
        </S.App>
    )
}
