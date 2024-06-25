import styled, { keyframes } from 'styled-components'
import { TIMINGS } from 'src/shared/const'

const rotateHue = keyframes`
    from {
        filter: hue-rotate(0);
    }
    to {
        filter: hue-rotate(360deg);
    }
`

type Props = {
    angle: number
    firstColor: string
    secondColor: string
    thirdColor: string
}

const BackgroundGradient = styled.div<Props>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: ${({ angle, firstColor, secondColor, thirdColor }) =>
        `linear-gradient(${angle}deg, ${firstColor}, ${secondColor}, ${thirdColor})`};
    animation: ${rotateHue} ${TIMINGS.ROTATE_ANIMATION}s alternate linear infinite;
`

export const S = {
    BackgroundGradient,
}
