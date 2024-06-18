import { asyncThunkCreator, buildCreateSlice } from '@reduxjs/toolkit'
import { cardsApi } from 'src/entities/card'
import { getCardsFromSpreadsheet } from 'src/entities/card/lib/getCardsFromSpreadsheet.ts'
import { CardType } from 'src/entities/card/model/types/card.types.ts'
import { Nullable } from 'src/shared/types/nullable.ts'
import { handleNetworkError } from 'src/shared/lib/handleNetworkError.ts'
import { text } from 'src/shared/const/const.ts'

type InitialState = {
    cards: CardType[]
    isLoading: boolean
    error: Nullable<string>
}

const initialState: InitialState = {
    cards: [],
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
                    state.error = action.error.message ?? text['en'].SOMETHING_WENT_WRONG
                },
                settled: state => {
                    state.isLoading = false
                },
            },
        ),
    }),
})

export const cardsName = cardsSlice.name

export const cardsReducer = cardsSlice.reducer

export const { fetchCards } = cardsSlice.actions
