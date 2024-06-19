import { VALUES } from 'src/shared/const/values.ts'
import { SYMBOLS } from 'src/shared/const/symbols.ts'

export const TEXTS = {
    [VALUES.EN]: {
        APP_NAME: 'RosMosDev',
        APP_ACRONYM: 'RMD',
        SOMETHING_WENT_WRONG: 'Something went wrong...',
        CARD_SEARCH: 'Card search',
        LOADING: 'Loading...',
        SORT_ALPHABET_ASCENDING: `${SYMBOLS.ASCENDING} Alphabet`,
        SORT_ALPHABET_DESCENDING: `${SYMBOLS.DESCENDING} Alphabet`,
        ALL: 'All',
        UNCATEGORIZED: 'Uncategorized',
    },
    [VALUES.RU]: {
        APP_NAME: 'РосМосДев',
        APP_ACRONYM: 'РМД',
        SOMETHING_WENT_WRONG: 'Что-то пошло не так...',
        CARD_SEARCH: 'Поиск карточек',
        LOADING: 'Загрузка...',
        SORT_ALPHABET_ASCENDING: `${SYMBOLS.ASCENDING} Алфавит`,
        SORT_ALPHABET_DESCENDING: `${SYMBOLS.DESCENDING} Алфавит`,
        ALL: 'Все',
        UNCATEGORIZED: 'Без категории',
    },
} as const
