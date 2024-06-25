import styled from 'styled-components'

const BackgroundVideo = styled.video`
    position: fixed;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (min-aspect-ratio: 16/9) {
        height: 56.25vw;
    }

    @media (max-aspect-ratio: 16/9) {
        width: 177.78vh;
    }
`

export const S = {
    BackgroundVideo,
}
