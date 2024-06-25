import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const DashboardHeader = styled.header`
    position: sticky;
    top: 0;
    background-color: ${theme.colors.backgroundAccent};
    padding: ${theme.sizes.regularSpace} ${theme.sizes.largeSpace};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.sizes.largeSpace};
    flex-wrap: wrap;
    backdrop-filter: blur(${theme.blurs.regularBlur});
    z-index: 200;
`

const Tools = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${theme.sizes.largeSpace};
`

const Actions = styled.div``

export const S = {
    DashboardHeader,
    Tools,
    Actions,
}
