import { S } from 'src/widgets/header/header.styles.ts'
import { text } from 'src/shared/const/const.ts'

export const Header = () => {
    return (
        <S.Header>
            <h1>{text['en'].APP_NAME}</h1>
        </S.Header>
    )
}
