import { Spreadsheet } from 'src/entities/card/api/cardsApi.types.ts'
import { key, sheetId } from 'src/shared/config'
import { apiInstance } from 'src/shared/api/base.ts'

export const cardsApi = {
    getCards: async () =>
        apiInstance.get<Spreadsheet>(sheetId, {
            params: { key, includeGridData: true },
        }),
}
