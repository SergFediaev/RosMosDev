import React from 'react'
import ReactDOM from 'react-dom/client'
import 'src/app/styles/index.css'
import { App } from 'src/app/app.tsx'
import { GlobalStyles } from 'src/app/styles/global.styles.ts'
import { Provider } from 'react-redux'
import { store } from 'src/app/store.ts'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <GlobalStyles />
                <App />
            </StyleSheetManager>
        </Provider>
    </React.StrictMode>,
)
