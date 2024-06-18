import React from 'react'
import ReactDOM from 'react-dom/client'
import 'src/app/styles/index.css'
import { App } from 'src/app/app.tsx'
import { GlobalStyles } from 'src/app/styles/global.styles.ts'
import { Provider } from 'react-redux'
import { store } from 'src/app/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalStyles />
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
)
