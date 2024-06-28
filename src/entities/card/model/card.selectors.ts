import { AppState } from 'src/app/store.ts'
import { createSelector } from '@reduxjs/toolkit'
import { FILTERS } from 'src/features/filterCards'

export const selectCards = (state: AppState) => state.cards

export const selectCardItems = (state: AppState) => state.cards.items

export const selectIsLearningMode = (state: AppState) => state.cards.isLearningMode

export const selectCardsSearch = (state: AppState) => state.cards.search

export const selectCardsSort = (state: AppState) => state.cards.sort

export const selectCardsFilter = (state: AppState) => state.cards.filter

export const selectHasCardFilters = (state: AppState) => state.cards.filters.length > 1

export const selectIsCardsLoading = (state: AppState) => state.cards.isLoading

export const selectFilteredCards = createSelector(selectCardItems, selectCardsFilter, (cards, { value }) => {
    if (value === FILTERS.UNCATEGORIZED) return cards.filter(card => !card.tags)

    if (value !== FILTERS.ALL) return cards.filter(card => card.tags?.toLowerCase().includes(value))

    return cards
})

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
