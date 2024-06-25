import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { TYPES } from 'src/shared/const'

const ColorPicker = styled.input.attrs({ type: TYPES.COLOR })`
    min-width: ${theme.sizes.checkbox};
    height: ${theme.sizes.checkbox};

    &::-webkit-color-swatch {
        border: ${theme.sizes.regularBorder} ${theme.colors.font} solid;
        border-radius: ${theme.roundings.round};
    }
`

export const S = {
    ColorPicker,
}
