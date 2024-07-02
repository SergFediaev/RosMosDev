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
        const [id, title, content, tags, created, updated] = row.values.map(value => value.formattedValue)

        tags && tags.split(VALUES.COMMA).forEach(tag => (cardFilter.addFilter = tag))

        return { id, title, content, tags: tags && tags.split(VALUES.COMMA).join(VALUES.COMMA_SPACE), created, updated }
    })

    if (cards.some(card => !card.tags) && cardFilter.count > 1) cardFilter.addFilter = FILTERS.UNCATEGORIZED

    const filters = cardFilter.getFilters(lang, cards)
    return { cards, filters }
}
