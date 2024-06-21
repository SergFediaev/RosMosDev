import React from 'react'
import ReactDOM from 'react-dom/client'
import 'src/app/styles/index.css'
import { GlobalStyles } from 'src/app/styles/global.styles.ts'
import { Provider } from 'react-redux'
import { store } from 'src/app/store.ts'
import { StyleSheetManager } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { router } from 'src/app/router.tsx'
import isPropValid from '@emotion/is-prop-valid'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <GlobalStyles />
                <RouterProvider router={router} />
            </StyleSheetManager>
        </Provider>
    </React.StrictMode>,
)
