import { AppState } from 'src/app/store.ts'

export const selectCards = (state: AppState) => state.cards.cards
