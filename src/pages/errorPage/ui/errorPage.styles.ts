import styled, { keyframes } from 'styled-components'
import { TIMINGS } from 'src/shared/const'
import { theme } from 'src/app/styles/theme.ts'

const appear = keyframes`
    to {
        opacity: 1;
    }
`

const Message = styled.p<{ index: number }>`
    font-family: Consolas, 'Lucida Console', monospace;
    opacity: 0;
    animation: ${appear} ${TIMINGS.MESSAGE_APPEAR}ms forwards;
    animation-delay: ${({ index }) => TIMINGS.MESSAGE_APPEAR * index}s;
`

const ErrorPage = styled.div`
    background-color: ${theme.colors.errorBackground};
    padding: ${theme.sizes.hugeSpace};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: ${theme.sizes.smallSpace};

    & ${Message}:first-child {
        margin-bottom: ${theme.sizes.largeSpace};
    }

    & ${Message}:nth-last-child(3) {
        margin: ${theme.sizes.largeSpace} 0;
    }
`

export const S = {
    ErrorPage,
    Message,
}
