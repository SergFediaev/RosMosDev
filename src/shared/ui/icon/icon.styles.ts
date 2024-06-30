import styled, { css } from 'styled-components'
import { spin } from 'src/shared/ui/animations/spin.ts'
import { TIMINGS } from 'src/shared/const'
import { IconSizes } from 'src/shared/ui/buttonIcon/iconButton.types.ts'
import { theme } from 'src/app/styles/theme.ts'
import { getGlow } from 'src/shared/ui/animations/glow.ts'

type Props = {
    iconSize?: IconSizes
    isIconSpinning?: boolean
    isIconGlowing?: boolean
    isIconGlowingColorPositive?: boolean
}

const Icon = styled.span<Props>`
    display: inline-block;
    font-size: ${({ iconSize }) => iconSize || theme.sizes.defaultFont};

    ${({ isIconSpinning }) =>
        isIconSpinning &&
        css`
            &:hover {
                animation: ${spin} ${TIMINGS.SPIN_ANIMATION}s linear infinite;
            }
        `}

    ${({ isIconGlowing, isIconGlowingColorPositive }) =>
        isIconGlowing &&
        css`
            animation: ${getGlow(isIconGlowingColorPositive)} ${TIMINGS.SPIN_ANIMATION}s infinite ease-in-out;

            &:hover {
                cursor: help;
            }
        `}
`

export const S = {
    Icon,
}
