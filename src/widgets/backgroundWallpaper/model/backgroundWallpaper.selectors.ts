import { AppState } from 'src/app/store.ts'

export const selectBackgroundWallpaper = (state: AppState) => state.settings.backgroundWallpaper.value
