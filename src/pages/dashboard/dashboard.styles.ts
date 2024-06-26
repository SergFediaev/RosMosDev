import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { TIMINGS } from 'src/shared/const'
import { appear } from 'src/shared/ui/animations/appear.ts'

const Dashboard = styled.main`
    padding: ${theme.sizes.largeSpace};
    opacity: 0;
    animation: ${appear} ${TIMINGS.TRANSITION_TRANSFORM}s linear forwards;
`

export const S = {
    Dashboard,
}
