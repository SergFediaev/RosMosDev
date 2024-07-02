import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PATHS } from 'src/shared/const'
import { App } from 'src/app/app.tsx'
import { ErrorPage } from 'src/pages/errorPage/ui/errorPage.tsx'
import { CardsPage } from 'src/pages/cardsPage/cardsPage.tsx'
import { CardPage } from 'src/pages/cardPage/cardPage.tsx'
import { Settings } from 'src/pages/settings/settings.tsx'
import { useAppDispatch } from 'src/app/store/store.ts'
import { fetchCards } from 'src/entities/card'

export const BrowserRouterProvider = () => {
    const dispatch = useAppDispatch()

    return (
        <RouterProvider
            router={createBrowserRouter([
                {
                    path: PATHS.ROOT,
                    element: <App />,
                    errorElement: <ErrorPage />,
                    loader: () => dispatch(fetchCards()),
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
            ])}
        />
    )
}
