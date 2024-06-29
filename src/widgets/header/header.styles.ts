import styled, { css } from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { TIMINGS } from 'src/shared/const'

const Header = styled.header<{ isMenuOpen: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    background-color: ${theme.colors.backgroundHeader};
    padding: ${theme.sizes.regularSpace} ${theme.sizes.largeSpace};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.sizes.regularSpace};
    flex-wrap: wrap;
    backdrop-filter: blur(${theme.blurs.regularBlur});
    z-index: ${theme.indexes.header};
    transition: ${TIMINGS.TRANSITION_TRANSFORM}s ease-in-out;
    transform: translateY(-100%);
    min-height: ${theme.sizes.headerHeight};
    box-shadow: ${theme.shadows.bottom};

    ${({ isMenuOpen }) =>
        isMenuOpen &&
        css`
            position: sticky;
            transform: translateY(0);
        `}
`

export const S = {
    Header,
}
