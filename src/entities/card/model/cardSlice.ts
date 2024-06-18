import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit'
import { cardsApi } from 'src/entities/card'
import { getCardsFromSpreadsheet } from 'src/entities/card/lib/getCardsFromSpreadsheet.ts'
import { CardType } from 'src/entities/card/model/types/card.types.ts'
import { Nullable } from 'src/shared/types/nullable.ts'
import { handleNetworkError } from 'src/shared/lib/handleNetworkError.ts'
import { TEXTS, VALUES } from 'src/shared/const'

type InitialState = {
    cards: CardType[]
    search: string
    isLoading: boolean
    error: Nullable<string>
}

const initialState: InitialState = {
    cards: [],
    search: VALUES.EMPTY_STRING,
    isLoading: false,
    error: null,
}

const createSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: create => ({
        fetchCards: create.asyncThunk<CardType[], void>(
            async (_, { rejectWithValue }) => {
                try {
                    const response = await cardsApi.getCards()
                    return getCardsFromSpreadsheet(response.data)
                } catch (e) {
                    return rejectWithValue({ error: handleNetworkError(e) })
                }
            },
            {
                pending: state => {
                    state.isLoading = true
                },
                fulfilled: (state, action) => {
                    state.cards = action.payload
                },
                rejected: (state, action) => {
                    const lang = 'en'
                    state.error = action.error.message ?? TEXTS[lang].SOMETHING_WENT_WRONG
                },
                settled: state => {
                    state.isLoading = false
                },
            },
        ),
        searchCards: create.reducer((state, action: PayloadAction<{ search: string }>) => {
            state.search = action.payload.search
        }),
    }),
})

export const cardsName = cardsSlice.name

export const cardsReducer = cardsSlice.reducer

export const { fetchCards, searchCards } = cardsSlice.actions