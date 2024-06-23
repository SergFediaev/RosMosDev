import styled, { keyframes } from 'styled-components'
import { TIMINGS } from 'src/shared/const'
import { theme } from 'src/app/styles/theme.ts'
import error from 'src/shared/assets/gifs/error.gif'

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
    background: ${theme.colors.errorBackground};
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

const rise = keyframes`
    to {
        bottom: -1%;
    }
`

const Waiting = styled.div`
    background: url(${error}) no-repeat bottom center / contain;
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    position: fixed;
    bottom: -50%;
    right: 10%;
    animation: linear ${TIMINGS.RISE_ANIMATION}s ${rise} forwards;
`

export const S = {
    ErrorPage,
    Message,
    Waiting,
}
