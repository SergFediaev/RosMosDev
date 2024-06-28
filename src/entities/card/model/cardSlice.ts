import { cardsApi, CardsWithFilters, CardType, getCardsFromSpreadsheet } from 'src/entities/card'
import { getSorts, Sort } from 'src/features/sortCards'
import { cardFilters, Filter, getFilters } from 'src/features/filterCards'
import { Nullable } from 'src/shared/types/nullable.ts'
import { VALUES } from 'src/shared/const'
import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit'
import { handleNetworkError } from 'src/shared/lib/handleNetworkError.ts'
import { Lang } from 'src/shared/types/language.ts'
import { RejectedWithError } from 'src/shared/types/rejectedWithError.ts'

type InitialState = {
    items: CardType[]
    search: string
    sort: Sort
    sorts: Sort[]
    filter: Filter
    filters: Filter[]
    isLoading: boolean
    error: Nullable<string>
}

const initialState: InitialState = {
    items: [],
    search: VALUES.EMPTY_STRING,
    sort: getSorts()[0],
    sorts: getSorts(),
    filter: getFilters()[0],
    filters: getFilters(),
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
        fetchCards: create.asyncThunk<CardsWithFilters, Lang>(
            async (lang, { rejectWithValue }) => {
                try {
                    const response = await cardsApi.getCards()
                    return getCardsFromSpreadsheet(response.data, cardFilters(), lang)
                } catch (error) {
                    return rejectWithValue({ error: handleNetworkError(error, lang) })
                }
            },
            {
                pending: state => {
                    state.isLoading = true
                },
                fulfilled: (state, action) => {
                    state.items = action.payload.cards
                    state.filters = action.payload.filters
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
        setCardsSearch: create.reducer((state, action: PayloadAction<{ search: string }>) => {
            state.search = action.payload.search
        }),
        setCardsSort: create.reducer((state, action: PayloadAction<{ sort: Sort }>) => {
            state.sort = action.payload.sort
        }),
        setCardsFilter: create.reducer((state, action: PayloadAction<{ filter: Filter }>) => {
            state.filter = action.payload.filter
        }),
    }),
})

export const cardsName = cardsSlice.name

export const cardsReducer = cardsSlice.reducer

export const { fetchCards, setCardsSearch, setCardsSort, setCardsFilter } = cardsSlice.actions
