import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { cardsName, cardsReducer } from 'src/entities/card/model/cardSlice.ts'
import { settingsName, settingsReducer } from 'src/entities/setting/model/settingSlice.ts'
import { backgroundsName, backgroundsReducer } from 'src/entities/background/model/backgroundSlice.ts'
import { VALUES } from 'src/shared/const'
import { getSorts } from 'src/features/sortCards'
import { getFilters } from 'src/features/filterCards'
import { getBackgroundTypes } from 'src/widgets/background/lib/getBackgroundTypes.ts'
import { theme } from 'src/app/styles/theme.ts'
import { randomGradient } from 'src/widgets/backgroundRandomGradient/lib/randomGradient.ts'
import { getBackgroundWallpapers } from 'src/widgets/backgroundWallpaper/lib/getBackgroundWallpapers.ts'
import { getBackgroundVideos } from 'src/widgets/backgroundVideo/lib/getBackgroundVideos.ts'
import { getLanguages } from 'src/entities/setting/lib/getLanguages.ts'

const reducer = combineReducers({
    [cardsName]: cardsReducer,
    [settingsName]: settingsReducer,
    [backgroundsName]: backgroundsReducer,
})

export type RootState = ReturnType<typeof reducer>

const preloadedState: RootState = {
    cards: {
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
    },
    settings: {
        language: getLanguages()[0],
        languages: getLanguages(),
        showConnectionAlways: false,
        isDebugEnabled: false,
        isMarkupEnabled: false,
    },
    backgrounds: {
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
    },
}

export const store = configureStore({
    reducer,
    preloadedState,
})

type AppStore = typeof store

type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const useAppSelector = useSelector.withTypes<RootState>()

export const useAppStore = useStore.withTypes<AppStore>()
