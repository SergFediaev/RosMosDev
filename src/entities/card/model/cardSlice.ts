import { cardsApi, CardsWithFilters, CardType, getCardsFromSpreadsheet } from 'src/entities/card'
import { getSorts, Sort } from 'src/features/sortCards'
import { cardFilters, Filter, FILTERS, getFilters } from 'src/features/filterCards'
import { Nullable } from 'src/shared/types/nullable.ts'
import { asyncThunkCreator, buildCreateSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { handleNetworkError } from 'src/shared/lib/handleNetworkError.ts'
import { Lang } from 'src/shared/types/language.ts'
import { RejectedWithError } from 'src/shared/types/rejectedWithError.ts'
import { restoreDefaultSettings, setLanguage } from 'src/entities/setting/model/settingSlice.ts'
import { isObjectsShallowEqual } from 'src/shared/lib/isObjectsShallowEqual.ts'
import { KEYS, VALUES } from 'src/shared/const'
import { getFromSessionStorage } from 'src/shared/lib/sessionStorage.ts'
import { getFromLocalStorage } from 'src/shared/lib/localStorage.ts'

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
    items: getFromSessionStorage(KEYS.CARDS, []),
    isLearningMode: getFromSessionStorage(KEYS.IS_LEARNING_MODE, true),
    search: getFromSessionStorage(KEYS.SEARCH, VALUES.EMPTY_STRING),
    sort: getFromLocalStorage(KEYS.SORT, getSorts()[0]),
    sorts: getFromLocalStorage(KEYS.SORTS, getSorts()),
    filter: getFromSessionStorage(KEYS.FILTER, getFilters()[0]),
    filters: getFromSessionStorage(KEYS.FILTERS, getFilters()),
    showTags: getFromLocalStorage(KEYS.SHOW_TAGS, true),
    showId: getFromLocalStorage(KEYS.SHOW_ID, false),
    showDate: getFromLocalStorage(KEYS.SHOW_DATE, true),
    isLoading: false,
    error: null,
}

const createSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
})

const cardsSlice = createSlice({
    name: KEYS.CARDS,
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
        setIsLearningMode: create.reducer((state, action: PayloadAction<{ isLearningMode: boolean }>) => {
            state.isLearningMode = action.payload.isLearningMode
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
        setShowTags: create.reducer((state, action: PayloadAction<{ showTags: boolean }>) => {
            state.showTags = action.payload.showTags
        }),
        setShowId: create.reducer((state, action: PayloadAction<{ showId: boolean }>) => {
            state.showId = action.payload.showId
        }),
        setShowDate: create.reducer((state, action: PayloadAction<{ showDate: boolean }>) => {
            state.showDate = action.payload.showDate
        }),
        fetchCards: create.asyncThunk<CardsWithFilters>(
            async (_, { getState, rejectWithValue }) => {
                const state = getState() as { settings: { language: { value: Lang } } }
                const lang = state.settings.language.value

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
                    state.filters = filters

                    const filter = filters.find(({ value }) => value === state.filter.value)
                    if (filter) state.filter = filter

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

                const sorts = getSorts(lang)
                const sort = sorts.find(({ value }) => isObjectsShallowEqual(value, state.sort.value))
                state.sorts = sorts
                if (sort) state.sort = sort

                const filters = cardFilters().getFilters(lang, state.items)
                const filter = filters.find(({ value }) => value === state.filter.value)
                state.filters = filters
                if (filter) state.filter = filter
            })
            .addCase(restoreDefaultSettings, () => initialState),
})

export const cardsName = cardsSlice.name

export const cardsReducer = cardsSlice.reducer

export const {
    setIsLearningMode,
    setCardsSearch,
    setCardsSort,
    setCardsFilter,
    setShowTags,
    setShowId,
    setShowDate,
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
