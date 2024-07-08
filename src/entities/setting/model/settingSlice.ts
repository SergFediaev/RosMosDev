import { Language } from 'src/shared/types/language.ts'
import { getLanguages } from 'src/entities/setting/lib/getLanguages.ts'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getFromLocalStorage } from 'src/shared/lib/localStorage.ts'
import { KEYS } from 'src/shared/const'
import { DEFAULT_LANGUAGE } from 'src/entities/setting/const/defaultLanguage.ts'

type InitialState = {
    language: Language
    languages: Language[]
    showConnectionAlways: boolean
    isDebugEnabled: boolean
    isMarkupEnabled: boolean
}

const initialState: InitialState = {
    language: getFromLocalStorage(KEYS.LANGUAGE, getLanguages()[DEFAULT_LANGUAGE]),
    languages: getFromLocalStorage(KEYS.LANGUAGES, getLanguages()),
    showConnectionAlways: getFromLocalStorage(KEYS.SHOW_CONNECTION_ALWAYS, false),
    isDebugEnabled: getFromLocalStorage(KEYS.IS_DEBUG_ENABLED, false),
    isMarkupEnabled: getFromLocalStorage(KEYS.IS_MARKUP_ENABLED, false),
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
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
            state.language = language ?? languages[DEFAULT_LANGUAGE]
        }),
        setShowConnectionAlways: create.reducer((state, action: PayloadAction<{ showConnectionAlways: boolean }>) => {
            state.showConnectionAlways = action.payload.showConnectionAlways
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
        restoreDefaultSettings: create.reducer(() => initialState),
    }),
})

export const settingsName = settingsSlice.name

export const settingsReducer = settingsSlice.reducer

export const { setLanguage, setShowConnectionAlways, setIsDebugEnabled, setIsMarkupEnabled, restoreDefaultSettings } =
    settingsSlice.actions

export const {
    selectLang,
    selectLanguage,
    selectLanguages,
    selectShowConnectionAlways,
    selectIsDebugEnabled,
    selectIsMarkupEnabled,
} = settingsSlice.selectors
