import styled from 'styled-components'

const BackgroundWallpaper = styled.div<{ wallpaper: string }>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: no-repeat center / cover url(${({ wallpaper }) => wallpaper});
`

export const S = {
    BackgroundWallpaper,
}
