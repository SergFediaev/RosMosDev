import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Select = styled.div``

const Selected = styled.span`
    display: flex;
    gap: ${theme.dimensions.largeSpace};
    background-color: ${theme.colors.accent};
    padding: ${theme.dimensions.regularSpace};
    border-radius: ${theme.roundings.card};

    &:hover {
        cursor: pointer;
    }
`

const Options = styled.ul`
    margin-top: ${theme.dimensions.largeSpace};
    position: absolute;
    background-color: ${theme.colors.backgroundAccent};
    border-radius: ${theme.roundings.card};
    overflow: hidden;
    box-shadow: ${theme.directions.leftShadow} ${theme.directions.bottomShadow} ${theme.blurs.regularBlur}
        ${theme.spreads.shadow} ${theme.colors.shadow};
`

const Option = styled.li<{ isHovered: boolean }>`
    padding: ${theme.dimensions.regularSpace};
    background-color: ${({ isHovered }) => (isHovered ? theme.colors.accent : 'inherit')};

    &:hover {
        cursor: pointer;
    }
`

export const S = {
    Select,
    Selected,
    Options,
    Option,
}
