import { BackgroundType } from 'src/widgets/background/types/backgroundType.types.ts'
import { BackgroundWallpaper } from 'src/widgets/backgroundWallpaper/model/backgroundWallpaper.types.ts'
import { Nullable } from 'src/shared/types/nullable.ts'
import { BackgroundVideo } from 'src/widgets/backgroundVideo/types/backgroundVideo.types.ts'
import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit'
import { Lang } from 'src/shared/types/language.ts'
import { randomWallpaperApi } from 'src/widgets/backgroundRandomWallpaper/api/randomWallpaperApi.ts'
import { handleNetworkError } from 'src/shared/lib/handleNetworkError.ts'
import { RejectedWithError } from 'src/shared/types/rejectedWithError.ts'
import { restoreDefaultSettings, setLanguage } from 'src/entities/setting/model/settingSlice.ts'
import { defaultBackgrounds } from 'src/app'
import { getBackgroundTypes } from 'src/widgets/background/lib/getBackgroundTypes.ts'
import { getBackgroundWallpapers } from 'src/widgets/backgroundWallpaper/lib/getBackgroundWallpapers.ts'
import { getBackgroundVideos } from 'src/widgets/backgroundVideo/lib/getBackgroundVideos.ts'
import { isObjectsShallowEqual } from 'src/shared/lib/isObjectsShallowEqual.ts'

type InitialState = {
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

const createSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

const backgroundsSlice = createSlice({
    name: 'backgrounds',
    initialState: {} as InitialState,
    selectors: {
        selectBackgroundType: state => state.backgroundType,
        selectBackgroundTypes: state => state.backgroundTypes,
        selectBackgroundColor: state => state.backgroundColor,
        selectBackgroundRandomGradient: state => state.backgroundRandomGradient,
        selectBackgroundWallpaper: state => state.backgroundWallpaper,
        selectBackgroundWallpapers: state => state.backgroundWallpapers,
        selectBackgroundRandomWallpaper: state => state.backgroundRandomWallpaper,
        selectBackgroundVideo: state => state.backgroundVideo,
        selectBackgroundVideos: state => state.backgroundVideos,
        selectHasBackgroundOverlay: state => state.hasBackgroundOverlay,
        selectIsBackgroundLoading: state => state.isLoading,
        selectBackgroundError: state => state.error,
    },
    reducers: create => ({
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
        toggleHasBackgroundOverlay: create.reducer(state => {
            state.hasBackgroundOverlay = !state.hasBackgroundOverlay
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
    extraReducers: builder =>
        builder
            .addCase(setLanguage, (state, action) => {
                const lang = action.payload.language.value

                const backgroundTypes = getBackgroundTypes(lang)
                const backgroundType = backgroundTypes.find(({ value }) => value === state.backgroundType.value)
                state.backgroundTypes = backgroundTypes
                if (backgroundType) state.backgroundType = backgroundType

                const backgroundWallpapers = getBackgroundWallpapers(lang)
                const backgroundWallpaper = backgroundWallpapers.find(
                    ({ value }) => value === state.backgroundWallpaper.value,
                )
                state.backgroundWallpapers = backgroundWallpapers
                if (backgroundWallpaper) state.backgroundWallpaper = backgroundWallpaper

                const backgroundVideos = getBackgroundVideos(lang)
                const backgroundVideo = backgroundVideos.find(({ value }) =>
                    isObjectsShallowEqual(value, state.backgroundVideo.value),
                )
                state.backgroundVideos = backgroundVideos
                if (backgroundVideo) state.backgroundVideo = backgroundVideo
            })
            .addCase(restoreDefaultSettings, (): InitialState => defaultBackgrounds),
})

export const backgroundsName = backgroundsSlice.name

export const backgroundsReducer = backgroundsSlice.reducer

export const {
    setBackgroundType,
    setBackgroundColor,
    setBackgroundRandomGradient,
    setBackgroundWallpaper,
    setBackgroundVideo,
    toggleHasBackgroundOverlay,
    fetchRandomWallpaper,
} = backgroundsSlice.actions

export const {
    selectBackgroundType,
    selectBackgroundTypes,
    selectBackgroundColor,
    selectBackgroundRandomGradient,
    selectBackgroundWallpaper,
    selectBackgroundWallpapers,
    selectBackgroundRandomWallpaper,
    selectBackgroundVideo,
    selectBackgroundVideos,
    selectHasBackgroundOverlay,
    selectIsBackgroundLoading,
    selectBackgroundError,
} = backgroundsSlice.selectors
