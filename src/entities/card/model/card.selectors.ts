import { AppState } from 'src/app/store.ts'
import { createSelector } from '@reduxjs/toolkit'

export const selectCards = (state: AppState) => state.cards.cards

export const selectCardsSearch = (state: AppState) => state.cards.search

export const selectCardsSort = (state: AppState) => state.cards.sort

export const selectIsCardsLoading = (state: AppState) => state.cards.isLoading

export const selectSearchedCards = createSelector(selectCards, selectCardsSearch, (cards, cardsSearch) => {
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
