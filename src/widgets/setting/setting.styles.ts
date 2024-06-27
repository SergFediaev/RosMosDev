import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Setting = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${theme.sizes.bigSpace};
    padding: ${theme.sizes.largeSpace};
    break-inside: avoid;
    margin-bottom: ${theme.sizes.largeSpace};

    &:before {
        background-color: ${theme.colors.backgroundSetting};
        backdrop-filter: blur(${theme.blurs.regularBlur});
        border-radius: ${theme.roundings.card};
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }

    & p {
        font-size: ${theme.sizes.mediumFont};
    }
`

// ToDo: Add bottom margin.
const Name = styled.h2``

export const S = {
    Setting,
    Name,
}
