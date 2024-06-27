import styled from 'styled-components'
import { spin } from 'src/shared/ui/animations/spin.ts'
import { TIMINGS } from 'src/shared/const'

// ToDo: Duplicated animation.
const LoadingIcon = styled.span`
    display: inline-block;
    animation: ${spin} ${TIMINGS.SPIN_ANIMATION}s linear infinite;
`

export const S = {
    LoadingIcon,
}
