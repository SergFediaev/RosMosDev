import { CardFilters, FILTERS } from 'src/features/filterCards'
import { CardsWithFilters, CardType, Spreadsheet } from 'src/entities/card'
import { VALUES } from 'src/shared/const'
import { Lang } from 'src/shared/types/language.ts'
import { isStringEmpty } from 'src/shared/lib/isStringEmpty.ts'

export const getCardsFromSpreadsheet = (
    spreadsheet: Spreadsheet,
    cardFilter: CardFilters,
    lang: Lang,
): CardsWithFilters => {
    cardFilter.reset()
    const cards: CardType[] = []
    const sheet = spreadsheet.sheets[0]
    const frozenRowCount = sheet.properties.gridProperties.frozenRowCount
    const rows = sheet.data[0].rowData.slice(frozenRowCount)

    for (const { values } of rows) {
        if (!values) continue

        const [id, title, content, tags, created, updated] = values.map(({ formattedValue }) => formattedValue)

        if (!(id && title && content)) continue
        if ([id, title, content].some(string => isStringEmpty(string))) continue

        tags && tags.split(VALUES.COMMA).forEach(tag => (cardFilter.addFilter = tag))

        cards.push({
            id,
            title,
            content,
            tags: tags && tags.split(VALUES.COMMA).join(VALUES.COMMA_SPACE),
            created,
            updated,
        })
    }

    if (cards.some(card => !card.tags) && cardFilter.count > 1) cardFilter.addFilter = FILTERS.UNCATEGORIZED

    const filters = cardFilter.getFilters(lang, cards)
    return { cards, filters }
}
