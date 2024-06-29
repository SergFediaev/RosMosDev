import { keyframes } from 'styled-components'

export const rotateHue = keyframes`
    from {
        filter: hue-rotate(0);
    }
    to {
        filter: hue-rotate(360deg);
    }
`
