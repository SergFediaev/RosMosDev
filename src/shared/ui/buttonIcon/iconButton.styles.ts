import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { IconSizes } from 'src/shared/ui/buttonIcon/iconButton.types.ts'

const IconButton = styled.span<{ size?: IconSizes }>`
    font-size: ${({ size }) => size || theme.sizes.defaultFont};

    &:hover {
        cursor: pointer;
    }
`

export const S = {
    IconButton,
}
