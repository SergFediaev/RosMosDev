import axios from 'axios'
import { baseURL } from 'src/shared/config'

export const apiInstance = axios.create({ baseURL })
