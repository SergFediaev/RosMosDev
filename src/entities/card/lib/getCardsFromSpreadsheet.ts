import { Spreadsheet } from 'src/entities/card/api/cardsApi.types.ts'
import { CardType } from 'src/entities/card/model/types/card.types.ts'

export const getCardsFromSpreadsheet = (spreadsheet: Spreadsheet): CardType[] =>
    spreadsheet.sheets[0].data[0].rowData.slice(1).map(row => {
        const [title, content, tags] = row.values.map(value => value.formattedValue)
        return { title, content, tags: tags && tags.split(',').join(', ') }
    })
