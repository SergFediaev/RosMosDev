import { instance } from 'src/common/api'
import { Spreadsheet } from 'src/features/cards/api/cardsApi.types.ts'
import { CardType } from 'src/features/cards/ui/cards/card/card.types.ts'

const sheetId = '1SY1k_wf3slGCLZDcnDTmDGIPii6AYfBOLxFd_ME5FUE'
const key = 'AIzaSyCbsqmhqmFF8JXuAQUzfJdfqx7Gu8-9cIQ'

export const cardsApi = {
    async getCards() {
        try {
            const response = await instance.get<Spreadsheet>(sheetId, {
                params: { key, includeGridData: true },
            })

            return getCardsFromSpreadsheet(response.data)
        } catch (error) {
            console.error(error)
            return []
        }
    },
}

const getCardsFromSpreadsheet = (spreadsheet: Spreadsheet): CardType[] =>
    spreadsheet.sheets[0].data[0].rowData.slice(1).map(row => {
        const [title, content, tags] = row.values.map(value => value.formattedValue)

        return { title, content, tags: tags && tags.split(',').join(', ') }
    })
