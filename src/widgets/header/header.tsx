import { S } from 'src/widgets/header/header.styles.ts'
import { Search } from 'src/widgets/search/search.tsx'
import { TEXTS } from 'src/shared/const'

export const Header = () => {
    const lang = 'en'

    return (
        <S.Header>
            <h1>{TEXTS[lang].APP_NAME}</h1>
            <Search />
        </S.Header>
    )
}
