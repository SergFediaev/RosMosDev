import { Spreadsheet } from 'src/entities/card/api/cardsApi.types.ts'
import { getCardsFromSpreadsheet } from 'src/entities/card/lib/getCardsFromSpreadsheet.ts'
import { key, sheetId } from 'src/shared/config'
import { apiInstance } from 'src/shared/api/base.ts'

export const cardsApi = {
    async getCards() {
        try {
            const response = await apiInstance.get<Spreadsheet>(sheetId, {
                params: { key, includeGridData: true },
            })

            return getCardsFromSpreadsheet(response.data)
        } catch (error) {
            console.error(error)
            return []
        }
    },
}
