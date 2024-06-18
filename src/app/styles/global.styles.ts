import { createGlobalStyle } from 'styled-components'
import interRegular from 'src/shared/assets/fonts/inter/Inter-Regular.ttf'
import interBold from 'src/shared/assets/fonts/inter/Inter-Bold.ttf'
import interBlack from 'src/shared/assets/fonts/inter/Inter-Black.ttf'
import { theme } from 'src/app/styles/theme.ts'

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: Inter;
        src: local('Inter'),
        local('Inter Regular'),
        local('Inter-Regular'),
        url(${interRegular}) format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Inter;
        src: local('Inter'),
        local('Inter Bold'),
        local('Inter-Bold'),
        url(${interBold}) format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: Inter;
        src: local('Inter'),
        local('Inter Black'),
        local('Inter-Black'),
        url(${interBlack}) format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    *, *::before, *::after, *::placeholder {
        margin: 0;
        padding: 0;
        font-family: Inter, Arial, Helvetica, sans-serif;
        background: unset;
        border: unset;
        color: ${theme.colors.font};
        box-sizing: border-box;
        line-height: 1.2;
        word-wrap: anywhere;
        list-style: none;
    }
`
