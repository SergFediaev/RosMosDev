import styled, { css } from 'styled-components'
import { rotateHue } from 'src/shared/ui/animations/rotateHue.ts'
import { TIMINGS } from 'src/shared/const'
import { theme } from 'src/app/styles/theme.ts'

// ToDo: Duplicated animation.
const Front = styled.div<{ randomGradient: string }>`
    background: ${({ randomGradient }) => randomGradient};
    animation: ${rotateHue} ${TIMINGS.ROTATE_ANIMATION}s alternate linear infinite;

    &:hover {
        cursor: help;
    }
`

const Back = styled.div`
    white-space: pre-wrap;
    top: -100%;
    transform: rotateY(${theme.degrees.flip});

    &:hover {
        cursor: not-allowed;
    }
`

const Spoiler = styled.div<{ isOpen: boolean }>`
    min-height: 50vh;
    transition: transform ${TIMINGS.TRANSITION_TRANSFORM}s;
    transform-style: preserve-3d;

    ${({ isOpen }) =>
        isOpen &&
        css`
            transform: rotateY(${theme.degrees.flip});
        `}

    & ${Front}, & ${Back} {
        height: 100%;
        position: relative;
        backface-visibility: hidden;
    }
`

export const S = {
    Spoiler,
    Front,
    Back,
}
