import styled, { css } from 'styled-components'

const Loading = styled.span<{ size?: string }>`
    ${({ size }) =>
        size &&
        css`
            font-size: ${size};
            font-weight: bold;
        `};
`

export const S = {
    Loading,
}
