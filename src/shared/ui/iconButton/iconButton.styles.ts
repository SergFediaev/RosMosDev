import styled from 'styled-components'
import { TIMINGS } from 'src/shared/const'

const IconButton = styled.span`
    transition: transform ${TIMINGS.TRANSITION_TRANSFORM}s ease-in-out;
    display: inline-block;

    &:hover {
        cursor: pointer;
        transform: scale(1.5);
    }
`

export const S = {
    IconButton,
}
