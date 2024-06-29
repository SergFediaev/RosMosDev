import { S } from './cardInfo.styles.ts'
import { TEXTS } from 'src/shared/const'
import { Lang } from 'src/shared/types/language.ts'

type Props = {
    id: string
    created?: string
    updated?: string
    showCardId?: boolean
    showCardDate?: boolean
    lang: Lang
    fontSize?: string
}

export const CardInfo = ({
    id,
    created,
    updated,
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
                </>
            )}
        </S.CardInfo>
    )
}
