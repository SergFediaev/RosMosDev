import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Palette = styled.div`
    position: absolute;
    background-color: ${theme.colors.backgroundPrimary};
    border-radius: ${theme.roundings.card};
    display: flex;
    gap: ${theme.sizes.regularSpace};
    padding: ${theme.sizes.regularSpace};
    box-shadow: ${theme.shadows.bottomLeft};
    transform: translateY(60%);
`

const Color = styled.span<{ color: string }>`
    width: ${theme.sizes.checkbox};
    height: ${theme.sizes.checkbox};
    background-color: ${({ color }) => color};

    &:hover {
        cursor: pointer;
    }
`

export const S = {
    Palette,
    Color,
}
