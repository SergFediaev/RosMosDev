import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit'
import { Lang, Language } from 'src/shared/types/language.ts'
import { defaultLanguages } from 'src/entities/setting/model/defaultLanguages.ts'
import { BackgroundVideo } from 'src/widgets/backgroundVideo/types/backgroundVideo.types.ts'
import { defaultBackgroundVideos } from 'src/widgets/backgroundVideo/model/defaultBackgroundVideos.ts'
import { BackgroundType } from 'src/widgets/background/types/backgroundType.types.ts'
import { defaultBackgroundTypes } from 'src/widgets/background/model/defaultBackgroundTypes.ts'
import { BackgroundWallpaper } from 'src/widgets/backgroundWallpaper/model/backgroundWallpaper.types.ts'
import { defaultBackgroundWallpapers } from 'src/widgets/backgroundWallpaper/model/defaultBackgroundWallpapers.ts'
import { theme } from 'src/app/styles/theme.ts'
import { Nullable } from 'src/shared/types/nullable.ts'
import { handleNetworkError } from 'src/shared/lib/handleNetworkError.ts'
import { randomWallpaperApi } from 'src/widgets/backgroundRandomWallpaper/api/randomWallpaperApi.ts'
import { randomGradient } from 'src/widgets/backgroundGradient/lib/randomGradient.ts'
import { RejectedWithError } from 'src/shared/types/rejectedWithError.ts'

type InitialState = {
    language: Language
    languages: Language[]
    isDebugEnabled: boolean
    isMarkupEnabled: boolean
    backgroundType: BackgroundType
    backgroundTypes: BackgroundType[]
    backgroundColor: string
    backgroundRandomGradient: string
    backgroundWallpaper: BackgroundWallpaper
    backgroundWallpapers: BackgroundWallpaper[]
    backgroundRandomWallpaper: Nullable<string>
    backgroundVideo: BackgroundVideo
    backgroundVideos: BackgroundVideo[]
    hasBackgroundOverlay: boolean
    isLoading: boolean
    error: Nullable<string>
}

const initialState: InitialState = {
    language: defaultLanguages[0],
    languages: defaultLanguages,
    isDebugEnabled: false,
    isMarkupEnabled: false,
    backgroundType: defaultBackgroundTypes[4],
    backgroundTypes: defaultBackgroundTypes,
    backgroundColor: theme.colors.backgroundDefault,
    backgroundRandomGradient: randomGradient(),
    backgroundWallpaper: defaultBackgroundWallpapers[0],
    backgroundWallpapers: defaultBackgroundWallpapers,
    backgroundRandomWallpaper: null,
    backgroundVideo: defaultBackgroundVideos[0],
    backgroundVideos: defaultBackgroundVideos,
    hasBackgroundOverlay: false,
    isLoading: false,
    error: null,
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
        setBackgroundRandomGradient: create.reducer(
            (
                state,
                action: PayloadAction<{
                    backgroundRandomGradient: string
                }>,
            ) => {
                state.backgroundRandomGradient = action.payload.backgroundRandomGradient
            },
        ),
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
        setBackgroundRandomWallpaper: create.reducer(
            (
                state,
                action: PayloadAction<{
                    backgroundRandomWallpaper: string
                }>,
            ) => {
                state.backgroundRandomWallpaper = action.payload.backgroundRandomWallpaper
            },
        ),
        setBackgroundVideo: create.reducer((state, action: PayloadAction<{ backgroundVideo: BackgroundVideo }>) => {
            state.backgroundVideo = action.payload.backgroundVideo
        }),
        setHasBackgroundOverlay: create.reducer((state, action: PayloadAction<{ hasBackgroundOverlay: boolean }>) => {
            state.hasBackgroundOverlay = action.payload.hasBackgroundOverlay
        }),
        fetchRandomWallpaper: create.asyncThunk<string, Lang>(
            async (lang, { rejectWithValue }) => {
                try {
                    const response = await randomWallpaperApi.getRandomWallpaper()
                    return URL.createObjectURL(response.data)
                } catch (error) {
                    return rejectWithValue({ error: handleNetworkError(error, lang) })
                }
            },
            {
                pending: state => {
                    state.isLoading = true
                },
                fulfilled: (state, action) => {
                    state.backgroundRandomWallpaper = action.payload
                    if (state.error) state.error = null
                },
                rejected: (state, action) => {
                    state.error = (action.payload as RejectedWithError).error ?? action.error.message
                },
                settled: state => {
                    state.isLoading = false
                },
            },
        ),
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
    setBackgroundRandomGradient,
    setBackgroundWallpaper,
    setBackgroundVideo,
    setHasBackgroundOverlay,
    fetchRandomWallpaper,
} = settingsSlice.actions
