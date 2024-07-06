import styled, { css } from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { TIMINGS } from 'src/shared/const'

// ToDo: Duplicated transform scale.
const UserPicture = styled.img<{ isClickable?: boolean }>`
    max-width: ${theme.sizes.checkbox};
    max-height: ${theme.sizes.checkbox};
    border: ${theme.sizes.mediumBorder} ${theme.colors.fontPrimary} solid;
    border-radius: ${theme.roundings.circle};

    ${({ isClickable }) =>
        isClickable &&
        css`
            transition: ${TIMINGS.TRANSITION_TRANSFORM}s ease-in-out;

            &:hover {
                cursor: pointer;
                transform: scale(1.5);
                background-color: ${theme.colors.fontPrimary};
            }
        `}
`

export const S = {
    UserPicture,
}
