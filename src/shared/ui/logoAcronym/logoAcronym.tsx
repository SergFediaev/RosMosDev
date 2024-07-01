import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { S } from 'src/shared/ui/logoAcronym/logoAcronym.styles.ts'
import { TEXTS } from 'src/shared/const'
import { useAppSelector } from 'src/app/store.ts'

export const LogoAcronym = () => {
    const lang = useAppSelector(selectLang)
    // ToDo: Refactor empty styled component.
    return <S.LogoAcronym title={TEXTS[lang].APP_NAME}>{TEXTS[lang].APP_ACRONYM}</S.LogoAcronym>
}
