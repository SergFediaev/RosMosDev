import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Select = styled.div``

const Selected = styled.span`
    display: flex;
    gap: ${theme.sizes.largeSpace};
    background-color: ${theme.colors.backgroundAccent};
    padding: ${theme.sizes.mediumSpace};
    border-radius: ${theme.roundings.card};

    & span {
        font-family: ${theme.emojis.noto};
    }

    &:hover {
        cursor: pointer;
    }
`

const Options = styled.ul`
    margin-top: ${theme.sizes.regularSpace};
    position: absolute;
    background-color: ${theme.colors.backgroundTertiary};
    border-radius: ${theme.roundings.card};
    overflow: hidden;
    box-shadow: ${theme.directions.leftShadow} ${theme.directions.bottomShadow} ${theme.blurs.regularBlur}
        ${theme.spreads.shadow} ${theme.colors.shadow};
    z-index: 100;
`

const Option = styled.li<{ isHovered: boolean }>`
    padding: ${theme.sizes.mediumSpace};
    background-color: ${({ isHovered }) => (isHovered ? theme.colors.backgroundAccent : 'inherit')};
    font-family: ${theme.emojis.noto};

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
