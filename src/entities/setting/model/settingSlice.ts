import { Language } from 'src/shared/types/language.ts'
import { getLanguages } from 'src/entities/setting/lib/getLanguages.ts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { defaultSettings } from 'src/app'

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
            const lang = action.payload.language.value
            const languages = getLanguages(lang)
            const language = languages.find(({ value }) => value === lang)
            state.languages = languages
            if (language) state.language = language
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
        restoreDefaultSettings: create.reducer((): InitialState => defaultSettings),
    }),
})

export const settingsName = settingsSlice.name

export const settingsReducer = settingsSlice.reducer

export const {
    setLanguage,
    toggleShowConnectionAlways,
    setIsDebugEnabled,
    toggleIsMarkupEnabled,
    restoreDefaultSettings,
} = settingsSlice.actions

export const {
    selectLang,
    selectLanguage,
    selectLanguages,
    selectShowConnectionAlways,
    selectIsDebugEnabled,
    selectIsMarkupEnabled,
} = settingsSlice.selectors
