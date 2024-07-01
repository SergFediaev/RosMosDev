import styled from 'styled-components'
import { TIMINGS } from 'src/shared/const'
import { rotateHue } from 'src/shared/ui/animations/rotateHue.ts'

const BackgroundRandomGradient = styled.div<{ randomGradient: string }>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: ${({ randomGradient }) => randomGradient};
    animation: ${rotateHue} ${TIMINGS.ROTATE_ANIMATION}s alternate linear infinite;
`

export const S = {
    BackgroundRandomGradient,
}
