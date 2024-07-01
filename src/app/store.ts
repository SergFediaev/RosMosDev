import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { cardsName, cardsReducer } from 'src/entities/card/model/cardSlice.ts'
import { settingsName, settingsReducer } from 'src/entities/setting/model/settingSlice.ts'
import { backgroundsName, backgroundsReducer } from 'src/entities/background/model/backgroundSlice.ts'

export const store = configureStore({
    reducer: {
        [cardsName]: cardsReducer,
        [settingsName]: settingsReducer,
        [backgroundsName]: backgroundsReducer,
    },
})

export type AppStore = typeof store

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const useAppSelector = useSelector.withTypes<AppState>()

export const useAppStore = useStore.withTypes<AppStore>()
