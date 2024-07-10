import { S } from './cardInfo.styles.ts'
import { SYMBOLS, TEXTS, TYPES } from 'src/shared/const'
import { Lang } from 'src/shared/types/language.ts'

type Props = {
    id: string
    created?: string
    updated?: string
    name?: string
    email?: string
    showCardId?: boolean
    showCardDate?: boolean
    lang: Lang
    fontSize?: string
}

export const CardInfo = ({
    id,
    created,
    updated,
    name,
    email,
    showCardId = true,
    showCardDate = true,
    lang,
    ...restInfoProps
}: Props) => {
    if (!showCardId && !showCardDate) return

    // ToDo: Refactor JSX.
    return (
        <S.CardInfo {...restInfoProps}>
            {showCardId && <p>{id.toUpperCase()}</p>}
            {showCardDate && (
                <>
                    {created && (
                        <p>
                            {TEXTS[lang].CREATED}
                            {SYMBOLS.COLON_SPACE}
                            {created}
                        </p>
                    )}
                    {updated && (
                        <p>
                            {TEXTS[lang].UPDATED}
                            {SYMBOLS.COLON_SPACE}
                            {updated}
                        </p>
                    )}
                    {name && email ? (
                        <p>
                            {TEXTS[lang].AUTHOR}
                            {SYMBOLS.COLON_SPACE}
                            <a href={`${TYPES.MAIL_TO}${email}`} title={email}>
                                {name}
                            </a>
                        </p>
                    ) : (
                        name && (
                            <p>
                                {TEXTS[lang].AUTHOR}
                                {SYMBOLS.COLON_SPACE}
                                {name}
                            </p>
                        )
                    )}
                </>
            )}
        </S.CardInfo>
    )
}
