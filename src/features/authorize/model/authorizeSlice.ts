import { asyncThunkCreator, buildCreateSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { Nullable } from 'src/shared/types/nullable.ts'
import { Lang } from 'src/shared/types/language.ts'
import { authorizeApi } from 'src/features/authorize/api/authorizeApi.ts'
import { handleNetworkError } from 'src/shared/lib/handleNetworkError.ts'
import { RejectedWithError } from 'src/shared/types/rejectedWithError.ts'
import { User } from 'src/features/authorize/model/authorize.types.ts'
import { getFromLocalStorage, setToLocalStorage } from 'src/shared/lib/localStorage.ts'
import { KEYS } from 'src/shared/const'

type InitialState = {
    isAuthorized: boolean
    guestId: string
    user: Nullable<User>
    isLoading: boolean
    error: Nullable<string>
}

const initialState: InitialState = {
    isAuthorized: !!getFromLocalStorage(KEYS.USER, null),
    user: getFromLocalStorage(KEYS.USER, null),
    guestId: nanoid(),
    isLoading: false,
    error: null,
}

const createSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

// ToDo: Save user and guest ID to local storage.
const authorizeSlice = createSlice({
    name: 'authorize',
    initialState,
    selectors: {
        selectIsAuthorized: state => state.isAuthorized,
        selectGuestId: state => state.guestId,
        selectUser: state => state.user,
        selectUserPicture: state => state.user?.picture,
        selectIsAuthorizeLoading: state => state.isLoading,
        selectAuthorizeError: state => state.error,
    },
    reducers: create => ({
        setIsAuthorized: create.reducer((state, action: PayloadAction<{ isAuthorized: boolean }>) => {
            const { isAuthorized } = action.payload
            state.isAuthorized = isAuthorized
            if (!isAuthorized) state.user = null
        }),
        setIsAuthorizeLoading: create.reducer((state, action: PayloadAction<{ isLoading: boolean }>) => {
            state.isLoading = action.payload.isLoading
        }),
        setAuthorizeError: create.reducer((state, action: PayloadAction<{ error: string }>) => {
            state.error = action.payload.error
            state.isLoading = false
        }),
        fetchUserInfo: create.asyncThunk<User, string>(
            async (accessToken, { getState, rejectWithValue }) => {
                const state = getState() as { settings: { language: { value: Lang } } }
                const lang = state.settings.language.value

                try {
                    const response = await authorizeApi.getUserInfo(accessToken)
                    return response.data
                } catch (error) {
                    return rejectWithValue({ error: handleNetworkError(error, lang) })
                }
            },
            {
                pending: state => {
                    state.isLoading = true
                },
                fulfilled: (state, action) => {
                    const { payload } = action
                    state.user = payload
                    state.isAuthorized = true
                    setToLocalStorage(KEYS.USER, payload)
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

export const authorizeName = authorizeSlice.name

export const authorizeReducer = authorizeSlice.reducer

export const { setIsAuthorized, fetchUserInfo, setIsAuthorizeLoading, setAuthorizeError } = authorizeSlice.actions

export const {
    selectIsAuthorized,
    selectGuestId,
    selectUser,
    selectUserPicture,
    selectIsAuthorizeLoading,
    selectAuthorizeError,
} = authorizeSlice.selectors
