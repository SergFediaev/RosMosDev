import { createBrowserRouter } from 'react-router-dom'
import { App } from 'src/app/app.tsx'
import { ErrorPage } from 'src/pages/errorPage/ui/errorPage.tsx'
import { PATHS } from 'src/shared/const/paths.ts'
import { Settings } from 'src/pages/settings/settings.tsx'
import { Dashboard } from 'src/pages/dashboard/dashboard.tsx'

export const router = createBrowserRouter([
    {
        path: PATHS.ROOT,
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: PATHS.SETTINGS,
                element: <Settings />,
            },
        ],
    },
    {
        path: PATHS.ERROR,
        element: <ErrorPage />,
    },
])
