import { AppState } from 'src/app/store.ts'

export const selectBackgroundVideo = (state: AppState) => state.settings.backgroundVideo.value
