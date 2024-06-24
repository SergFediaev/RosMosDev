import { Lang } from 'src/shared/types/language.ts'
import { Emoji } from 'src/shared/ui/emoji/emoji.tsx'
import { EMOJIS, TITLES, VALUES } from 'src/shared/const'

type Props = {
    lang: Lang
}

export const Signature = ({ lang }: Props) => {
    const heart = (
        <Emoji emoji={EMOJIS.HEART} title={`${TITLES[lang].LOVE} ${EMOJIS.LOVE}`} animation={{ name: VALUES.BEATS }} />
    )

    const fire = (
        <Emoji
            emoji={EMOJIS.FIRE}
            title={`${TITLES[lang].SOUL} ${EMOJIS.SOUL}`}
            animation={{ name: VALUES.BEATS, isReversed: true }}
        />
    )

    return lang === VALUES.RU ? (
        <p>
            Сделано с {heart} и {fire} в 24-м году
        </p>
    ) : (
        <p>
            Made with {heart} and {fire} in '24
        </p>
    )
}
