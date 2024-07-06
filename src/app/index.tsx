import ReactDOM from 'react-dom/client'
import { GlobalStyles } from 'src/app/styles/global.styles.ts'
import { Provider } from 'react-redux'
import { configureAppStore } from 'src/app/store/store.ts'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouterProvider } from 'src/app/browserRouterProvider.tsx'
import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { clientId } from 'src/features/authorize/api/authorizeApi.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={configureAppStore()}>
            <GoogleOAuthProvider clientId={clientId}>
                <StyleSheetManager shouldForwardProp={isPropValid}>
                    <GlobalStyles />
                    <BrowserRouterProvider />
                    <SpeedInsights />
                    <Analytics />
                </StyleSheetManager>
            </GoogleOAuthProvider>
        </Provider>
    </React.StrictMode>,
)
