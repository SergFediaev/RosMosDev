import { cardsApi, CardsWithFilters, CardType, getCardsFromSpreadsheet } from 'src/entities/card'
import { defaultSorts, Sort } from 'src/features/sortCards'
import { cardFilters, defaultFilters, Filter } from 'src/features/filterCards'
import { Nullable } from 'src/shared/types/nullable.ts'
import { TEXTS, VALUES } from 'src/shared/const'
import { asyncThunkCreator, buildCreateSlice, PayloadAction } from '@reduxjs/toolkit'
import { handleNetworkError } from 'src/shared/lib/handleNetworkError.ts'
import { Lang } from 'src/shared/types/language.ts'

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
    sort: defaultSorts[0],
    sorts: defaultSorts,
    filter: defaultFilters[0],
    filters: defaultFilters,
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
                },
                rejected: (state, action) => {
                    const lang = action.meta.arg
                    state.error = action.error.message ?? TEXTS[lang].SOMETHING_WENT_WRONG
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
