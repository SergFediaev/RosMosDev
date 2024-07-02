import { Language } from 'src/shared/types/language.ts'
import { getLanguages } from 'src/entities/setting/lib/getLanguages.ts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    language: Language
    languages: Language[]
    showConnectionAlways: boolean
    isDebugEnabled: boolean
    isMarkupEnabled: boolean
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {} as InitialState,
    selectors: {
        selectLang: state => state.language.value,
        selectLanguage: state => state.language,
        selectLanguages: state => state.languages,
        selectShowConnectionAlways: state => state.showConnectionAlways,
        selectIsDebugEnabled: state => state.isDebugEnabled,
        selectIsMarkupEnabled: state => state.isMarkupEnabled,
    },
    reducers: create => ({
        setLanguage: create.reducer((state, action: PayloadAction<{ language: Language }>) => {
            state.language = action.payload.language
            state.languages = getLanguages(action.payload.language.value)
        }),
        toggleShowConnectionAlways: create.reducer(state => {
            state.showConnectionAlways = !state.showConnectionAlways
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
        toggleIsMarkupEnabled: create.reducer(state => {
            state.isMarkupEnabled = !state.isMarkupEnabled
        }),
    }),
})

export const settingsName = settingsSlice.name

export const settingsReducer = settingsSlice.reducer

export const { setLanguage, toggleShowConnectionAlways, setIsDebugEnabled, toggleIsMarkupEnabled } =
    settingsSlice.actions

export const {
    selectLang,
    selectLanguage,
    selectLanguages,
    selectShowConnectionAlways,
    selectIsDebugEnabled,
    selectIsMarkupEnabled,
} = settingsSlice.selectors
