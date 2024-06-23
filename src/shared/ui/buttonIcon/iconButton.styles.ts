import styled, { keyframes } from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { IconSizes } from 'src/shared/ui/buttonIcon/iconButton.types.ts'
import { TIMINGS } from 'src/shared/const'

const spin = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`

type Props = {
    size?: IconSizes
    isSpinning?: boolean
}

const IconButton = styled.div<Props>`
    font-size: ${({ size }) => size || theme.sizes.defaultFont};
    transition: transform ${TIMINGS.TRANSITION_TRANSFORM}s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.5);
    }

    & span:hover {
        animation: ${spin} ${({ isSpinning }) => isSpinning && `${TIMINGS.SPIN_ANIMATION}s linear infinite`};
    }
`

export const S = {
    IconButton,
}
