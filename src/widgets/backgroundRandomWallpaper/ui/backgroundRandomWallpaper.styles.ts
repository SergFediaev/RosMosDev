import styled from 'styled-components'
import { Nullable } from 'src/shared/types/nullable.ts'
import { theme } from 'src/app/styles/theme.ts'

// ToDo: Use inset.

const BackgroundRandomWallpaper = styled.div<{ randomWallpaper: Nullable<string> }>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: no-repeat center / cover
        ${({ randomWallpaper }) => (randomWallpaper ? `url(${randomWallpaper})` : theme.colors.backgroundPlaceholder)};
`

export const S = {
    BackgroundRandomWallpaper,
}
