export type Spreadsheet = {
    spreadsheetId: string
    properties: { title: string }
    sheets: Sheet[]
    spreadsheetUrl: string
}

type Sheet = {
    properties: Properties
    data: [{ rowData: RowData[] }]
}

type Properties = {
    sheetId: number
    title: string
    index: number
    sheetType: string
    gridProperties: GridProperties
}

type GridProperties = {
    rowCount: number
    columnCount: number
    frozenRowCount: number
}

type RowData = {
    values: [{ formattedValue: string }]
}
