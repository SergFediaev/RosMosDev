import styled from 'styled-components'

type Props = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
}

export const Flex = styled.div<Props>`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: ${({ justify }) => justify || 'flex-start'};
    align-items: ${({ align }) => align || 'stretch'};
    flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
`
