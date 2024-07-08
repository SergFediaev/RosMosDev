import axios from 'axios'
import { CreateCard } from 'src/features/createCard/model/createCard.types.ts'

const baseURL = 'https://script.google.com/macros/s/'

const instance = axios.create({ baseURL })

const endpoint = 'AKfycbzdlzitgYrzXLpPxrmJ9n1kOHBPl65hB56L6S-ytA-Nx0AADwoFx16qR_sBD-M205Q3NA/exec'

export const createCardApi = {
    createCard: (createCard: CreateCard) => instance.post(endpoint, createCard),
}
