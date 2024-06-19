import { createSelector } from '@reduxjs/toolkit'
import { selectCardsSort, selectSearchedCards } from 'src/entities/card/model/card.selectors.ts'

export const selectSortedCards = createSelector(
    selectSearchedCards,
    selectCardsSort,
    (cards, { sortBy, sortDirection }) =>
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
