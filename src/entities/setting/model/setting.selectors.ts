import { AppState } from 'src/app/store.ts'

export const selectSettings = (state: AppState) => state.settings

export const selectLang = (state: AppState) => state.settings.language.value

export const selectIsMarkupEnabled = (state: AppState) => state.settings.isMarkupEnabled
