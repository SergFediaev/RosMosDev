import { AppState } from 'src/app/store.ts'

export const selectBackgroundType = (state: AppState) => state.settings.backgroundType.value
