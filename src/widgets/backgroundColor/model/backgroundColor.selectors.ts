import { AppState } from 'src/app/store.ts'

export const selectBackgroundColor = (state: AppState) => state.settings.backgroundColor
