import styled from 'styled-components'
import { spin } from 'src/shared/ui/animations/spin.ts'
import { TIMINGS } from 'src/shared/const'
import { IconSizes } from 'src/shared/ui/buttonIcon/iconButton.types.ts'
import { theme } from 'src/app/styles/theme.ts'

type Props = {
    iconSize?: IconSizes
    isIconSpinning?: boolean
}

const Icon = styled.span<Props>`
    display: inline-block;
    font-size: ${({ iconSize }) => iconSize || theme.sizes.defaultFont};

    &:hover {
        animation: ${spin} ${({ isIconSpinning }) => isIconSpinning && `${TIMINGS.SPIN_ANIMATION}s linear infinite`};
    }
`

export const S = {
    Icon,
}
