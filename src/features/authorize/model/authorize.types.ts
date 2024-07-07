import { Nullable } from 'src/shared/types/nullable.ts'
import { KEYS } from 'src/shared/const'

export type User = {
    sub: Nullable<string>
    [KEYS.NAME]: Nullable<string>
    [KEYS.EMAIL]: Nullable<string>
    picture: Nullable<string>
}
