import { AppState } from 'src/app/store.ts'

export const selectBackgroundRandomGradient = (state: AppState) => state.settings.backgroundRandomGradient
