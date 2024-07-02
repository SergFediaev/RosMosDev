import ReactDOM from 'react-dom/client'
import { GlobalStyles } from 'src/app/styles/global.styles.ts'
import { Provider } from 'react-redux'
import { configureAppStore, RootState } from 'src/app/store/store.ts'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouterProvider } from 'src/app/browserRouterProvider.tsx'
import React from 'react'
import { VALUES } from 'src/shared/const'
import { getSorts } from 'src/features/sortCards'
import { getFilters } from 'src/features/filterCards'
import { getLanguages } from 'src/entities/setting/lib/getLanguages.ts'
import { getBackgroundTypes } from 'src/widgets/background/lib/getBackgroundTypes.ts'
import { theme } from 'src/app/styles/theme.ts'
import { randomGradient } from 'src/widgets/backgroundRandomGradient/lib/randomGradient.ts'
import { getBackgroundWallpapers } from 'src/widgets/backgroundWallpaper/lib/getBackgroundWallpapers.ts'
import { getBackgroundVideos } from 'src/widgets/backgroundVideo/lib/getBackgroundVideos.ts'
import { settingsName } from 'src/entities/setting/model/settingSlice.ts'
import { cardsName } from 'src/entities/card'
import { backgroundsName } from 'src/entities/background/model/backgroundSlice.ts'
import { getFromLocalStorage } from 'src/shared/lib/localStorage.ts'

const defaultCards: RootState[typeof cardsName] = {
    items: [],
    isLearningMode: true,
    search: VALUES.EMPTY_STRING,
    sort: getSorts()[0],
    sorts: getSorts(),
    filter: getFilters()[0],
    filters: getFilters(),
    showTags: true,
    showId: false,
    showDate: true,
    isLoading: false,
    error: null,
}

const defaultSettings: RootState[typeof settingsName] = {
    language: getLanguages()[0],
    languages: getLanguages(),
    showConnectionAlways: false,
    isDebugEnabled: false,
    isMarkupEnabled: false,
}

const defaultBackgrounds: RootState[typeof backgroundsName] = {
    backgroundType: getBackgroundTypes()[4],
    backgroundTypes: getBackgroundTypes(),
    backgroundColor: theme.colors.backgroundDefault,
    backgroundRandomGradient: randomGradient(),
    backgroundWallpaper: getBackgroundWallpapers()[0],
    backgroundWallpapers: getBackgroundWallpapers(),
    backgroundRandomWallpaper: null,
    backgroundVideo: getBackgroundVideos()[0],
    backgroundVideos: getBackgroundVideos(),
    hasBackgroundOverlay: false,
    isLoading: false,
    error: null,
}

const preloadedState: RootState = {
    cards: getFromLocalStorage(cardsName, defaultCards),
    settings: getFromLocalStorage(settingsName, defaultSettings),
    backgrounds: getFromLocalStorage(backgroundsName, defaultBackgrounds),
}

const store = configureAppStore(preloadedState)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <GlobalStyles />
                <BrowserRouterProvider />
                <SpeedInsights />
                <Analytics />
            </StyleSheetManager>
        </Provider>
    </React.StrictMode>,
)
