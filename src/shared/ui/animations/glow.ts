import { keyframes } from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

export const getGlow = (isGlowingColorPositive: boolean = true) => {
    const color = isGlowingColorPositive ? theme.colors.positive : theme.colors.negative

    return keyframes`
        0%, 100% {
            text-shadow: 0 0 5px ${color}, 0 0 10px ${color}, 0 0 15px ${color};
        }
        50% {
            text-shadow: 0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color};
        }
    `
}
