import { S } from 'src/shared/ui/emoji/emoji.styles.ts'
import { EmojiAnimation } from 'src/shared/ui/emoji/emoji.types.ts'

type Props = {
    emoji: string
    title?: string
    animation?: EmojiAnimation
}

export const Emoji = ({ emoji, title, animation }: Props) => (
    <S.Emoji title={title} animation={animation}>
        {emoji}
    </S.Emoji>
)
