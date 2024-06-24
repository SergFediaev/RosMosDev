import { CardFilters, FILTERS } from 'src/features/filterCards'
import { CardsWithFilters, CardType, Spreadsheet } from 'src/entities/card'
import { VALUES } from 'src/shared/const'
import { Lang } from 'src/shared/types/language.ts'

export const getCardsFromSpreadsheet = (
    spreadsheet: Spreadsheet,
    cardFilter: CardFilters,
    lang: Lang,
): CardsWithFilters => {
    cardFilter.reset()

    const cards: CardType[] = spreadsheet.sheets[0].data[0].rowData.slice(1).map(row => {
        const [title, content, tags] = row.values.map(value => value.formattedValue)

        tags && tags.split(VALUES.COMMA).forEach(tag => (cardFilter.addFilter = tag))

        return { title, content, tags: tags && tags.split(VALUES.COMMA).join(VALUES.COMMA_SPACE) }
    })

    if (cards.some(card => !card.tags) && cardFilter.count > 1) cardFilter.addFilter = FILTERS.UNCATEGORIZED

    return { cards, filters: cardFilter.getFilters(lang) }
}
