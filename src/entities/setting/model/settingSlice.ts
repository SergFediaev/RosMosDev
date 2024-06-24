import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit'
import { Language } from 'src/shared/types/language.ts'
import { defaultLanguages } from 'src/entities/setting/model/defaultLanguages.ts'

type InitialState = {
    language: Language
    languages: Language[]
    isDebugEnabled: boolean
    isMarkupEnabled: boolean
}

const initialState: InitialState = {
    language: defaultLanguages[0],
    languages: defaultLanguages,
    isDebugEnabled: false,
    isMarkupEnabled: false,
}

const createSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: create => ({
        setLanguage: create.reducer((state, action: PayloadAction<{ language: Language }>) => {
            state.language = action.payload.language
        }),
        setIsDebugEnabled: create.reducer(
            (
                state,
                action: PayloadAction<{
                    isDebugEnabled: boolean
                }>,
            ) => {
                state.isDebugEnabled = action.payload.isDebugEnabled
                if (!action.payload.isDebugEnabled) state.isMarkupEnabled = false
            },
        ),
        setIsMarkupEnabled: create.reducer((state, action: PayloadAction<{ isMarkupEnabled: boolean }>) => {
            state.isMarkupEnabled = action.payload.isMarkupEnabled
        }),
    }),
})

export const settingsName = settingsSlice.name

export const settingsReducer = settingsSlice.reducer

export const { setLanguage, setIsDebugEnabled, setIsMarkupEnabled } = settingsSlice.actions
