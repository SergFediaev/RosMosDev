import { AppState } from 'src/app/store.ts'

export const selectHasBackgroundOverlay = (state: AppState) => state.settings.hasBackgroundOverlay
