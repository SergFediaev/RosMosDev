import { createBrowserRouter } from 'react-router-dom'
import { App } from 'src/app/app.tsx'
import { ErrorPage } from 'src/pages/errorPage/ui/errorPage.tsx'
import { PATHS } from 'src/shared/const/paths.ts'

export const router = createBrowserRouter([
    {
        path: PATHS.ROOT,
        element: <App />,
        errorElement: <ErrorPage />,
    },
])
