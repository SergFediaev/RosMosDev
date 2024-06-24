import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { SYMBOLS, TIMINGS } from 'src/shared/const'

const CheckboxStyles = styled.div<{ isChecked: boolean }>`
    font-size: ${theme.sizes.bigFont};
    font-weight: bold;
    min-width: ${theme.sizes.checkbox};
    height: ${theme.sizes.checkbox};
    border-radius: ${theme.roundings.card};
    transition: ${TIMINGS.CHECK_TRANSITION}s ease-in-out;
    background-color: ${({ isChecked }) => (isChecked ? theme.colors.primary : 'transparent')};
    color: ${({ isChecked }) => (isChecked ? theme.colors.font : 'transparent')};
    border: ${({ isChecked }) => (isChecked ? theme.colors.primary : theme.colors.font)} solid
        ${theme.sizes.regularBorder};

    &:after {
        content: ${({ isChecked }) => (isChecked ? `'${SYMBOLS.CHECK}'` : `'${SYMBOLS.SPACE}'`)};
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:hover {
        cursor: pointer;
        border-color: ${({ isChecked }) => (isChecked ? theme.colors.font : theme.colors.accent)};
    }
`

export const S = {
    Checkbox: CheckboxStyles,
}
