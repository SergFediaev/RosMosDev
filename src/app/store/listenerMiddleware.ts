import { addListener, createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import {
    setIsDebugEnabled,
    setLanguage,
    settingsName,
    toggleIsMarkupEnabled,
    toggleShowConnectionAlways,
} from 'src/entities/setting/model/settingSlice.ts'
import { setToLocalStorage } from 'src/shared/lib/localStorage.ts'
import {
    backgroundsName,
    fetchRandomWallpaper,
    setBackgroundColor,
    setBackgroundRandomGradient,
    setBackgroundType,
    setBackgroundVideo,
    setBackgroundWallpaper,
    toggleHasBackgroundOverlay,
} from 'src/entities/background/model/backgroundSlice.ts'
import {
    cardsName,
    fetchCards,
    setCardsFilter,
    setCardsSearch,
    setCardsSort,
    toggleIsLearningMode,
    toggleShowDate,
    toggleShowId,
    toggleShowTags,
} from 'src/entities/card'
import { AppDispatch, RootState } from 'src/app/store/store.ts'

export const listenerMiddleware = createListenerMiddleware()

const startAppListening = listenerMiddleware.startListening.withTypes<RootState, AppDispatch>()

export const addAppListener = addListener.withTypes<RootState, AppDispatch>()

startAppListening({
    matcher: isAnyOf(
        toggleIsLearningMode,
        setCardsSearch,
        setCardsSort,
        setCardsFilter,
        toggleShowTags,
        toggleShowId,
        toggleShowDate,
        fetchCards.fulfilled,
    ),
    effect: (_, listenerApi) => setToLocalStorage(cardsName, listenerApi.getState().cards),
})

startAppListening({
    matcher: isAnyOf(setLanguage, toggleShowConnectionAlways, setIsDebugEnabled, toggleIsMarkupEnabled),
    effect: (_, listenerApi) => setToLocalStorage(settingsName, listenerApi.getState().settings),
})

startAppListening({
    matcher: isAnyOf(
        setBackgroundType,
        setBackgroundColor,
        setBackgroundRandomGradient,
        setBackgroundWallpaper,
        setBackgroundVideo,
        toggleHasBackgroundOverlay,
        fetchRandomWallpaper.fulfilled,
    ),
    effect: (_, listenerApi) => setToLocalStorage(backgroundsName, listenerApi.getState().backgrounds),
})
