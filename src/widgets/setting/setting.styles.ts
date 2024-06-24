import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Setting = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${theme.sizes.regularSpace};
    padding: ${theme.sizes.largeSpace};
    background-color: ${theme.colors.backgroundAccent};
    border-radius: ${theme.roundings.card};
    break-inside: avoid;
    margin-bottom: ${theme.sizes.largeSpace};
`

const Name = styled.h2`
    font-size: ${theme.sizes.largeFont};
`

export const S = {
    Setting,
    Name,
}
