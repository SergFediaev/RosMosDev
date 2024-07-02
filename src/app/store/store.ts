import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { cardsName, cardsReducer } from 'src/entities/card/model/cardSlice.ts'
import { settingsName, settingsReducer } from 'src/entities/setting/model/settingSlice.ts'
import { backgroundsName, backgroundsReducer } from 'src/entities/background/model/backgroundSlice.ts'
import { VALUES } from 'src/shared/const'
import { listenerMiddleware } from 'src/app/store/listenerMiddleware.ts'

const reducer = combineReducers({
    [cardsName]: cardsReducer,
    [settingsName]: settingsReducer,
    [backgroundsName]: backgroundsReducer,
})

export type RootState = ReturnType<typeof reducer>

export const configureAppStore = (preloadedState?: Partial<RootState>) =>
    configureStore({
        reducer,
        preloadedState,
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(listenerMiddleware.middleware),
    })

type AppStore = ReturnType<typeof configureAppStore>

export type AppDispatch = AppStore[typeof VALUES.DISPATCH]

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const useAppSelector = useSelector.withTypes<RootState>()

export const useAppStore = useStore.withTypes<AppStore>()
