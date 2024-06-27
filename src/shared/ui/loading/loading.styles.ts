import styled, { css } from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { VALUES } from 'src/shared/const'
import { LoadingSizes } from 'src/shared/ui/loading/loading.types.ts'

const Loading = styled.span<{ size?: LoadingSizes }>`
    ${({ size }) =>
        size === VALUES.LARGE_SIZE &&
        css`
            font-size: ${theme.sizes.largeFont};
            font-weight: bold;
        `};
`

export const S = {
    Loading,
}
