import axios from 'axios'
import { User } from 'src/features/authorize/model/authorize.types.ts'

export const clientId = '526470751845-im85mc4te4bdu9lc9eci7chcg3vdpik6.apps.googleusercontent.com'

const baseURL = 'https://www.googleapis.com/oauth2/v3/'

const instance = axios.create({ baseURL })

const endpoint = 'userinfo'

const tokenType = 'Bearer'

export const authorizeApi = {
    getUserInfo: (accessToken: string) =>
        instance.get<User>(endpoint, {
            headers: {
                Authorization: `${tokenType} ${accessToken}`,
            },
        }),
}
