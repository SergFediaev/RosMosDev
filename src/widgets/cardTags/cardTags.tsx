import { Lang } from 'src/shared/types/language.ts'
import { TEXTS } from 'src/shared/const'

type Props = {
    lang: Lang
    tags?: string
}

export const CardTags = ({ lang, tags = TEXTS[lang].UNCATEGORIZED }: Props) => <p>{tags}</p>
