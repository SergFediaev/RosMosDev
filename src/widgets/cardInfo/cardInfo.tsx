import { S } from './cardInfo.styles.ts'
import { TEXTS, TYPES } from 'src/shared/const'
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
                            {TEXTS[lang].CREATED} {created}
                        </p>
                    )}
                    {updated && (
                        <p>
                            {TEXTS[lang].UPDATED} {updated}
                        </p>
                    )}
                    {name && email ? (
                        <a href={`${TYPES.MAIL_TO}${email}`} title={email}>
                            {name}
                        </a>
                    ) : (
                        name && <p>{name}</p>
                    )}
                </>
            )}
        </S.CardInfo>
    )
}
