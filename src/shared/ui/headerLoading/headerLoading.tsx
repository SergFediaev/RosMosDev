import { S } from './headerLoading.styles.ts'
import { TEXTS } from 'src/shared/const'
import { useSelector } from 'react-redux'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'

export const HeaderLoading = () => {
    const lang = useSelector(selectLang)

    return <S.HeaderLoading>{TEXTS[lang].LOADING}</S.HeaderLoading>
}
