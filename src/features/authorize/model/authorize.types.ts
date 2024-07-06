import { Nullable } from 'src/shared/types/nullable.ts'

export type User = {
    sub: Nullable<string>
    name: Nullable<string>
    email: Nullable<string>
    picture: Nullable<string>
}
