import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { cardsName, cardsReducer } from 'src/entities/card/model/cardSlice.ts'

export const store = configureStore({
    reducer: {
        [cardsName]: cardsReducer,
    },
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
