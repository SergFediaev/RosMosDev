import styled from 'styled-components'

const BackgroundColor = styled.div.attrs<{ backgroundColor: string }>(({ backgroundColor }) => ({
    style: { backgroundColor },
}))`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
`

export const S = {
    BackgroundColor,
}
