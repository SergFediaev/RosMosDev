import { TEXTS } from 'src/shared/const'
import { S } from 'src/pages/dashboard/dashboardHeader/logo/logo.styles.ts'
import { useSelector } from 'react-redux'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'

type Props = {
    isCardsLoading: boolean
}

export const Logo = ({ isCardsLoading }: Props) => {
    const lang = useSelector(selectLang)

    return isCardsLoading ? (
        <S.Loading>{TEXTS[lang].LOADING}</S.Loading>
    ) : (
        <S.Logo title={TEXTS[lang].APP_NAME}>{TEXTS[lang].APP_ACRONYM}</S.Logo>
    )
}
