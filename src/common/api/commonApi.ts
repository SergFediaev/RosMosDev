import axios from 'axios'

const baseURL = 'https://sheets.googleapis.com/v4/spreadsheets/'
export const instance = axios.create({ baseURL })
