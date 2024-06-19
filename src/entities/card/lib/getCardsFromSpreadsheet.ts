import { Spreadsheet } from 'src/entities/card/api/cardsApi.types.ts'
import { CardType } from 'src/entities/card/model/types/card.types.ts'
import { VALUES } from 'src/shared/const'
import { cardFilters, FILTERS } from 'src/features/filterCards'

export const getCardsFromSpreadsheet = (spreadsheet: Spreadsheet): CardType[] => {
    const filters = cardFilters()
    filters.reset()

    const cards: CardType[] = spreadsheet.sheets[0].data[0].rowData.slice(1).map(row => {
        const [title, content, tags] = row.values.map(value => value.formattedValue)

        tags && tags.split(VALUES.COMMA).forEach(tag => (filters.addFilter = tag))

        return { title, content, tags: tags && tags.split(VALUES.COMMA).join(VALUES.COMMA_SPACE) }
    })

    filters.addFilter = FILTERS.UNCATEGORIZED
    return cards
}
