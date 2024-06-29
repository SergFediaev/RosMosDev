import { createBrowserRouter } from 'react-router-dom'
import { App } from 'src/app/app.tsx'
import { ErrorPage } from 'src/pages/errorPage/ui/errorPage.tsx'
import { PATHS } from 'src/shared/const/paths.ts'
import { Settings } from 'src/pages/settings/settings.tsx'
import { CardsPage } from 'src/pages/cardsPage/cardsPage.tsx'
import { CardPage } from 'src/pages/cardPage/cardPage.tsx'

export const router = createBrowserRouter([
    {
        path: PATHS.ROOT,
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <CardsPage />,
            },
            {
                path: `${PATHS.CARD}${PATHS.ID}`,
                element: <CardPage />,
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
