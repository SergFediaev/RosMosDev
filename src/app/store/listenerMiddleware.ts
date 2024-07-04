import { addListener, createListenerMiddleware } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from 'src/app/store/store.ts'
import {
    fetchCards,
    setCardsFilter,
    setCardsSearch,
    setCardsSort,
    setIsLearningMode,
    setShowDate,
    setShowId,
    setShowTags,
} from 'src/entities/card'
import { clearSessionStorage, setToSessionStorage } from 'src/shared/lib/sessionStorage.ts'
import {
    restoreDefaultSettings,
    setIsDebugEnabled,
    setIsMarkupEnabled,
    setLanguage,
    setShowConnectionAlways,
} from 'src/entities/setting/model/settingSlice.ts'
import {
    fetchRandomWallpaper,
    setBackgroundColor,
    setBackgroundRandomGradient,
    setBackgroundType,
    setBackgroundVideo,
    setBackgroundWallpaper,
    setHasBackgroundOverlay,
} from 'src/entities/background/model/backgroundSlice.ts'
import { clearLocalStorage, setToLocalStorage } from 'src/shared/lib/localStorage.ts'
import { KEYS } from 'src/shared/const'

export const listenerMiddleware = createListenerMiddleware()

const startAppListening = listenerMiddleware.startListening.withTypes<RootState, AppDispatch>()

export const addAppListener = addListener.withTypes<RootState, AppDispatch>()

startAppListening({
    actionCreator: fetchCards.fulfilled,
    effect: (_, { getState }) => {
        setToSessionStorage(KEYS.CARDS, getState().cards.items)
        setToSessionStorage(KEYS.FILTERS, getState().cards.filters)
    },
})

startAppListening({
    actionCreator: setIsLearningMode,
    effect: ({ payload: { isLearningMode } }) => setToSessionStorage(KEYS.IS_LEARNING_MODE, isLearningMode),
})

startAppListening({
    actionCreator: setCardsSearch,
    effect: ({ payload: { search } }) => setToSessionStorage(KEYS.SEARCH, search),
})

startAppListening({
    actionCreator: setCardsSort,
    effect: ({ payload: { sort } }) => setToSessionStorage(KEYS.SORT, sort),
})

startAppListening({
    actionCreator: setCardsFilter,
    effect: ({ payload: { filter } }) => setToSessionStorage(KEYS.FILTER, filter),
})

startAppListening({
    actionCreator: setShowTags,
    effect: ({ payload: { showTags } }) => setToLocalStorage(KEYS.SHOW_TAGS, showTags),
})

startAppListening({
    actionCreator: setShowId,
    effect: ({ payload: { showId } }) => setToLocalStorage(KEYS.SHOW_ID, showId),
})

startAppListening({
    actionCreator: setShowDate,
    effect: ({ payload: { showDate } }) => setToLocalStorage(KEYS.SHOW_DATE, showDate),
})

startAppListening({
    actionCreator: setLanguage,
    effect: (_, { getState }) => {
        setToLocalStorage(KEYS.LANGUAGE, getState().settings.language)
        setToLocalStorage(KEYS.LANGUAGES, getState().settings.languages)

        setToSessionStorage(KEYS.SORT, getState().cards.sort)
        setToLocalStorage(KEYS.SORTS, getState().cards.sorts)

        setToSessionStorage(KEYS.FILTER, getState().cards.filter)
        setToSessionStorage(KEYS.FILTERS, getState().cards.filters)

        setToLocalStorage(KEYS.BACKGROUND_TYPE, getState().backgrounds.backgroundType)
        setToLocalStorage(KEYS.BACKGROUND_TYPES, getState().backgrounds.backgroundTypes)

        setToLocalStorage(KEYS.BACKGROUND_WALLPAPER, getState().backgrounds.backgroundWallpaper)
        setToLocalStorage(KEYS.BACKGROUND_WALLPAPERS, getState().backgrounds.backgroundWallpapers)

        setToLocalStorage(KEYS.BACKGROUND_VIDEO, getState().backgrounds.backgroundVideo)
        setToLocalStorage(KEYS.BACKGROUND_VIDEOS, getState().backgrounds.backgroundVideos)
    },
})

startAppListening({
    actionCreator: setShowConnectionAlways,
    effect: ({ payload: { showConnectionAlways } }) =>
        setToLocalStorage(KEYS.SHOW_CONNECTION_ALWAYS, showConnectionAlways),
})

startAppListening({
    actionCreator: setIsDebugEnabled,
    effect: ({ payload: { isDebugEnabled } }, { getState }) => {
        setToLocalStorage(KEYS.IS_DEBUG_ENABLED, isDebugEnabled)
        if (!isDebugEnabled) setToLocalStorage(KEYS.IS_MARKUP_ENABLED, getState().settings.isMarkupEnabled)
    },
})

startAppListening({
    actionCreator: setIsMarkupEnabled,
    effect: ({ payload: { isMarkupEnabled } }) => setToLocalStorage(KEYS.IS_MARKUP_ENABLED, isMarkupEnabled),
})

startAppListening({
    actionCreator: restoreDefaultSettings,
    effect: () => {
        clearSessionStorage()
        clearLocalStorage()
    },
})

startAppListening({
    actionCreator: setBackgroundType,
    effect: ({ payload: { backgroundType } }) => setToLocalStorage(KEYS.BACKGROUND_TYPE, backgroundType),
})

startAppListening({
    actionCreator: setBackgroundColor,
    effect: ({ payload: { backgroundColor } }) => setToLocalStorage(KEYS.BACKGROUND_COLOR, backgroundColor),
})

startAppListening({
    actionCreator: setBackgroundRandomGradient,
    effect: ({ payload: { backgroundRandomGradient } }) =>
        setToLocalStorage(KEYS.BACKGROUND_RANDOM_GRADIENT, backgroundRandomGradient),
})

startAppListening({
    actionCreator: setBackgroundWallpaper,
    effect: ({ payload: { backgroundWallpaper } }) => setToLocalStorage(KEYS.BACKGROUND_WALLPAPER, backgroundWallpaper),
})

startAppListening({
    actionCreator: fetchRandomWallpaper.fulfilled,
    effect: ({ payload }) => setToLocalStorage(KEYS.BACKGROUND_RANDOM_WALLPAPER, payload),
})

startAppListening({
    actionCreator: setBackgroundVideo,
    effect: ({ payload: { backgroundVideo } }) => setToLocalStorage(KEYS.BACKGROUND_VIDEO, backgroundVideo),
})

startAppListening({
    actionCreator: setHasBackgroundOverlay,
    effect: ({ payload: { hasBackgroundOverlay } }) =>
        setToLocalStorage(KEYS.HAS_BACKGROUND_OVERLAY, hasBackgroundOverlay),
})
