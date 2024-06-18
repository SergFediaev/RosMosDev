import { AppState } from 'src/app/store.ts'

export const selectCards = (state: AppState) => {
    const search = state.cards.search.toLowerCase()

    if (search)
        return state.cards.cards.filter(
            card =>
                card.title.toLowerCase().includes(search) ||
                card.tags?.toLowerCase().includes(search) ||
                card.content.toLowerCase().includes(search),
        )

    return state.cards.cards
}

export const selectSearchCards = (state: AppState) => state.cards.search

export const selectIsCardsLoading = (state: AppState) => state.cards.isLoading
