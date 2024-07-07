import { Spreadsheet } from 'src/entities/card/api/cardsApi.types.ts'
import { apiInstance } from 'src/shared/api/base.ts'
import { key } from 'src/shared/config'
import { SheetId } from 'src/features/cardsSource/model/cardsSource.types.ts'

export const cardsApi = {
    getCards: (sheetId: SheetId) =>
        apiInstance.get<Spreadsheet>(sheetId, {
            params: { key, includeGridData: true },
        }),
}
