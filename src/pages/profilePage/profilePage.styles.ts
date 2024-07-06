import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const ProfilePage = styled.div`
    display: flex;
    justify-content: center;
    padding: ${theme.sizes.largeSpace};
`

const Profile = styled.main`
    width: 100%;
    max-width: ${theme.sizes.viewCardWidth};
    background-color: ${theme.colors.backgroundPrimary};
    color: ${theme.colors.fontPrimary};
    font-size: ${theme.sizes.mediumFont};
    border-radius: ${theme.roundings.search};
    padding: ${theme.sizes.largeSpace};
    display: flex;
    flex-direction: column;
    gap: ${theme.sizes.bigSpace};
    box-shadow: ${theme.shadows.bottomLeft};
`

export const S = {
    ProfilePage,
    Profile,
}
