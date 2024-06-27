import { AppState } from 'src/app/store.ts'

export const selectBackgroundRandomWallpaper = (state: AppState) => state.settings.backgroundRandomWallpaper
