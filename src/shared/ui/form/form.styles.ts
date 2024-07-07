import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${theme.sizes.bigSpace};
`

export const S = {
    Form,
}
