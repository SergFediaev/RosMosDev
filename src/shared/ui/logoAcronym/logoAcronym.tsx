import { useSelector } from 'react-redux'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { S } from 'src/shared/ui/logoAcronym/logoAcronym.styles.ts'
import { TEXTS } from 'src/shared/const'

export const LogoAcronym = () => {
    const lang = useSelector(selectLang)
    // ToDo: Refactor empty styled component.
    return <S.LogoAcronym title={TEXTS[lang].APP_NAME}>{TEXTS[lang].APP_ACRONYM}</S.LogoAcronym>
}
