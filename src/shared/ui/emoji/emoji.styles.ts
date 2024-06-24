import styled, { keyframes } from 'styled-components'
import { EmojiAnimation } from 'src/shared/ui/emoji/emoji.types.ts'
import { TIMINGS, VALUES } from 'src/shared/const'

const beats = keyframes`
    to {
        transform: scale(1.4);
    }
`

type Props = {
    animation?: EmojiAnimation
    title?: string
}

const Emoji = styled.span<Props>`
    display: inline-block;
    animation: ${beats}
        ${({ animation }) =>
            animation &&
            `${TIMINGS.BEATS_ANIMATION}s infinite alternate${animation.isReversed ? '-reverse' : VALUES.EMPTY_STRING}`};

    &:hover {
        cursor: ${({ title }) => title && 'help'};
    }
`

export const S = {
    Emoji,
}
