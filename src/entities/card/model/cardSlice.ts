import { cardsApi, CardsWithFilters, CardType, getCardsFromSpreadsheet } from 'src/entities/card'
import { getSorts, Sort } from 'src/features/sortCards'
import { cardFilters, Filter, FILTERS, getFilters } from 'src/features/filterCards'
import { Nullable } from 'src/shared/types/nullable.ts'
import { VALUES } from 'src/shared/const'
import { asyncThunkCreator, buildCreateSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { handleNetworkError } from 'src/shared/lib/handleNetworkError.ts'
import { Lang } from 'src/shared/types/language.ts'
import { RejectedWithError } from 'src/shared/types/rejectedWithError.ts'

type InitialState = {
    items: CardType[]
    isLearningMode: boolean
    search: string
    sort: Sort
    sorts: Sort[]
    filter: Filter
    filters: Filter[]
    showTags: boolean
    showId: boolean
    showDate: boolean
    isLoading: boolean
    error: Nullable<string>
}

const initialState: InitialState = {
    items: [],
    isLearningMode: true,
    search: VALUES.EMPTY_STRING,
    sort: getSorts()[0],
    sorts: getSorts(),
    filter: getFilters()[0],
    filters: getFilters(),
    showTags: true,
    showId: false,
    showDate: true,
    isLoading: false,
    error: null,
}

const createSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    selectors: {
        selectCards: state => state.items,
        selectIsLearningMode: state => state.isLearningMode,
        selectCardsSearch: state => state.search,
        selectCardsSort: state => state.sort,
        selectCardSorts: state => state.sorts,
        selectCardsFilter: state => state.filter,
        selectCardFilters: state => state.filters,
        selectHasCardFilters: state => state.filters.length > 1,
        selectShowCardTags: state => state.showTags,
        selectShowCardId: state => state.showId,
        selectShowCardDate: state => state.showDate,
        selectIsCardsLoading: state => state.isLoading,
        selectCardsError: state => state.error,
    },
    reducers: create => ({
        toggleIsLearningMode: create.reducer(state => {
            state.isLearningMode = !state.isLearningMode
        }),
        setCardsSearch: create.reducer((state, action: PayloadAction<{ search: string }>) => {
            state.search = action.payload.search
        }),
        setCardsSort: create.reducer((state, action: PayloadAction<{ sort: Sort }>) => {
            state.sort = action.payload.sort
        }),
        setCardsFilter: create.reducer((state, action: PayloadAction<{ filter: Filter }>) => {
            state.filter = action.payload.filter
        }),
        toggleShowTags: create.reducer(state => {
            state.showTags = !state.showTags
        }),
        toggleShowId: create.reducer(state => {
            state.showId = !state.showId
        }),
        toggleShowDate: create.reducer(state => {
            state.showDate = !state.showDate
        }),
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
                    const { cards, filters } = action.payload
                    state.items = cards

                    state.filters = filters.map(({ label, value }) => ({
                        value,
                        label: `${label} (${
                            cards.filter(card => {
                                if (value === FILTERS.UNCATEGORIZED) return !card.tags

                                if (value !== FILTERS.ALL) return card.tags?.toLowerCase().includes(value)

                                return card
                            }).length
                        })`,
                    }))

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

export const cardsName = cardsSlice.name

export const cardsReducer = cardsSlice.reducer

export const {
    toggleIsLearningMode,
    setCardsSearch,
    setCardsSort,
    setCardsFilter,
    toggleShowTags,
    toggleShowId,
    toggleShowDate,
    fetchCards,
} = cardsSlice.actions

export const {
    selectCards,
    selectIsLearningMode,
    selectCardsSearch,
    selectCardsSort,
    selectCardSorts,
    selectCardsFilter,
    selectCardFilters,
    selectHasCardFilters,
    selectShowCardTags,
    selectShowCardId,
    selectShowCardDate,
    selectIsCardsLoading,
    selectCardsError,
} = cardsSlice.selectors

export const selectCardById = (id?: string) => createSelector(selectCards, cards => cards.find(card => card.id === id))

export const selectFilteredCards = createSelector(selectCards, selectCardsFilter, (cards, { value }) => {
    if (value === FILTERS.UNCATEGORIZED) return cards.filter(card => !card.tags)

    if (value !== FILTERS.ALL) return cards.filter(card => card.tags?.toLowerCase().includes(value))

    return cards
})

export const selectFilteredCardIndexById = (id?: string) =>
    createSelector(selectFilteredCards, cards => cards.findIndex(card => card.id === id))

export const selectSearchedCards = createSelector(selectFilteredCards, selectCardsSearch, (cards, cardsSearch) => {
    if (cardsSearch) {
        const search = cardsSearch.toLowerCase()

        return cards.filter(
            card =>
                card.title.toLowerCase().includes(search) ||
                card.tags?.toLowerCase().includes(search) ||
                card.content.toLowerCase().includes(search),
        )
    } else return cards
})

export const selectSortedCards = createSelector(
    selectSearchedCards,
    selectCardsSort,
    (cards, { value: { sortBy, sortDirection } }) =>
        cards
            .slice()
            .sort((cardA, cardB) =>
                cardA[sortBy] > cardB[sortBy]
                    ? 1 * sortDirection
                    : cardA[sortBy] < cardB[sortBy]
                      ? -1 * sortDirection
                      : 0,
            ),
)

export const selectHasSortedCards = createSelector(selectSortedCards, ({ length }) => length > 1)
