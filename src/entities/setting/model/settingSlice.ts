import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit'
import { Language } from 'src/shared/types/language.ts'
import { defaultLanguages } from 'src/entities/setting/model/defaultLanguages.ts'
import { BackgroundVideo } from 'src/widgets/backgroundVideo/types/backgroundVideo.types.ts'
import { defaultBackgroundVideos } from 'src/widgets/backgroundVideo/model/defaultBackgroundVideos.ts'
import { BackgroundType } from 'src/widgets/background/types/backgroundType.types.ts'
import { defaultBackgroundTypes } from 'src/widgets/background/model/defaultBackgroundTypes.ts'
import { BackgroundWallpaper } from 'src/widgets/backgroundWallpaper/model/backgroundWallpaper.types.ts'
import { defaultBackgroundWallpapers } from 'src/widgets/backgroundWallpaper/model/defaultBackgroundWallpapers.ts'
import { theme } from 'src/app/styles/theme.ts'

type InitialState = {
    language: Language
    languages: Language[]
    isDebugEnabled: boolean
    isMarkupEnabled: boolean
    backgroundType: BackgroundType
    backgroundTypes: BackgroundType[]
    backgroundColor: string
    backgroundWallpaper: BackgroundWallpaper
    backgroundWallpapers: BackgroundWallpaper[]
    backgroundVideo: BackgroundVideo
    backgroundVideos: BackgroundVideo[]
    hasBackgroundOverlay: boolean
}

const initialState: InitialState = {
    language: defaultLanguages[0],
    languages: defaultLanguages,
    isDebugEnabled: false,
    isMarkupEnabled: false,
    backgroundType: defaultBackgroundTypes[4],
    backgroundTypes: defaultBackgroundTypes,
    backgroundColor: theme.colors.background,
    backgroundWallpaper: defaultBackgroundWallpapers[0],
    backgroundWallpapers: defaultBackgroundWallpapers,
    backgroundVideo: defaultBackgroundVideos[0],
    backgroundVideos: defaultBackgroundVideos,
    hasBackgroundOverlay: false,
}

const createSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: create => ({
        setLanguage: create.reducer((state, action: PayloadAction<{ language: Language }>) => {
            state.language = action.payload.language
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
        setBackgroundType: create.reducer((state, action: PayloadAction<{ backgroundType: BackgroundType }>) => {
            state.backgroundType = action.payload.backgroundType
        }),
        setBackgroundColor: create.reducer((state, action: PayloadAction<{ backgroundColor: string }>) => {
            state.backgroundColor = action.payload.backgroundColor
        }),
        setBackgroundWallpaper: create.reducer(
            (
                state,
                action: PayloadAction<{
                    backgroundWallpaper: BackgroundWallpaper
                }>,
            ) => {
                state.backgroundWallpaper = action.payload.backgroundWallpaper
            },
        ),
        setBackgroundVideo: create.reducer((state, action: PayloadAction<{ backgroundVideo: BackgroundVideo }>) => {
            state.backgroundVideo = action.payload.backgroundVideo
        }),
        setHasBackgroundOverlay: create.reducer((state, action: PayloadAction<{ hasBackgroundOverlay: boolean }>) => {
            state.hasBackgroundOverlay = action.payload.hasBackgroundOverlay
        }),
    }),
})

export const settingsName = settingsSlice.name

export const settingsReducer = settingsSlice.reducer

export const {
    setLanguage,
    setIsDebugEnabled,
    setIsMarkupEnabled,
    setBackgroundType,
    setBackgroundColor,
    setBackgroundWallpaper,
    setBackgroundVideo,
    setHasBackgroundOverlay,
} = settingsSlice.actions
