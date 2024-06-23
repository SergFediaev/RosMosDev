import { createSelector } from '@reduxjs/toolkit'
import { selectCardsSort, selectSearchedCards } from 'src/entities/card'

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
