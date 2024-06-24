import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { cardsName, cardsReducer } from 'src/entities/card/model/cardSlice.ts'
import { settingsName, settingsReducer } from 'src/entities/setting/model/settingSlice.ts'

export const store = configureStore({
    reducer: {
        [cardsName]: cardsReducer,
        [settingsName]: settingsReducer,
    },
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
