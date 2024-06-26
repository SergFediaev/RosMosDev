import styled from 'styled-components'
import { TIMINGS } from 'src/shared/const'
import { theme } from 'src/app/styles/theme.ts'
import { appear } from 'src/shared/ui/animations/appear.ts'

const Toolbar = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${theme.sizes.regularSpace};
    opacity: 0;
    animation: ${appear} ${TIMINGS.TRANSITION_TRANSFORM}s linear forwards;
`

export const S = {
    Toolbar,
}
