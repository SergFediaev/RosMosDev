import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { S } from 'src/shared/ui/button/button.styles.ts'

export const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.sizes.regularSpace};

    & ${S.Button} {
        flex-grow: 1;
        text-align: center;
    }
`
