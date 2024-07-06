import { SYMBOLS, TEXTS } from 'src/shared/const'
import { Lang } from 'src/shared/types/language.ts'

type Props = {
    path: string
    lang: Lang
}

export const BreadcrumbLogo = ({ path, lang }: Props) => (
    <h1>
        {TEXTS[lang].APP_NAME} {SYMBOLS.SLASH} {path}
    </h1>
)
