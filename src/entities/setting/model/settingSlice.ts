import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit'
import { Lang, Language } from 'src/shared/types/language.ts'
import { getLanguages } from 'src/entities/setting/lib/getLanguages.ts'
import { BackgroundVideo } from 'src/widgets/backgroundVideo/types/backgroundVideo.types.ts'
import { getBackgroundVideos } from 'src/widgets/backgroundVideo/lib/getBackgroundVideos.ts'
import { BackgroundType } from 'src/widgets/background/types/backgroundType.types.ts'
import { getBackgroundTypes } from 'src/widgets/background/lib/getBackgroundTypes.ts'
import { BackgroundWallpaper } from 'src/widgets/backgroundWallpaper/model/backgroundWallpaper.types.ts'
import { getBackgroundWallpapers } from 'src/widgets/backgroundWallpaper/lib/getBackgroundWallpapers.ts'
import { theme } from 'src/app/styles/theme.ts'
import { Nullable } from 'src/shared/types/nullable.ts'
import { handleNetworkError } from 'src/shared/lib/handleNetworkError.ts'
import { randomWallpaperApi } from 'src/widgets/backgroundRandomWallpaper/api/randomWallpaperApi.ts'
import { randomGradient } from 'src/widgets/backgroundGradient/lib/randomGradient.ts'
import { RejectedWithError } from 'src/shared/types/rejectedWithError.ts'

type InitialState = {
    language: Language
    languages: Language[]
    showConnectionAlways: boolean
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
    language: getLanguages()[0],
    languages: getLanguages(),
    showConnectionAlways: false,
    isDebugEnabled: false,
    isMarkupEnabled: false,
    backgroundType: getBackgroundTypes()[4],
    backgroundTypes: getBackgroundTypes(),
    backgroundColor: theme.colors.backgroundDefault,
    backgroundRandomGradient: randomGradient(),
    backgroundWallpaper: getBackgroundWallpapers()[0],
    backgroundWallpapers: getBackgroundWallpapers(),
    backgroundRandomWallpaper: null,
    backgroundVideo: getBackgroundVideos()[0],
    backgroundVideos: getBackgroundVideos(),
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

            const { value } = action.payload.language
            state.languages = getLanguages(value)
            state.backgroundTypes = getBackgroundTypes(value)
            state.backgroundWallpapers = getBackgroundWallpapers(value)
            state.backgroundVideos = getBackgroundVideos(value)
        }),
        toggleShowConnectionAlways: create.reducer(state => {
            state.showConnectionAlways = !state.showConnectionAlways
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
    toggleShowConnectionAlways,
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
