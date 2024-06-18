import { TEXTS } from 'src/shared/const'
import { S } from './logo.styles.ts'

type Props = {
    isCardsLoading: boolean
}

export const Logo = ({ isCardsLoading }: Props) => {
    const lang = 'en'

    return isCardsLoading ? <S.Loading>{TEXTS[lang].LOADING}</S.Loading> : <S.Logo>{TEXTS[lang].APP_NAME}</S.Logo>
}
