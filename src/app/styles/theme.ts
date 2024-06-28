export const theme = {
    colors: {
        backgroundDefault: '#808080', // Gray
        backgroundPrimary: 'rgba(44, 44, 44)',
        backgroundSecondary: '#f5f5f5', // Whitesmoke
        backgroundTertiary: 'rgba(0, 48, 98)',
        backgroundAccent: '#2268d0',
        backgroundOverlay: 'rgba(0, 0, 0, .5)',
        backgroundHeader: 'rgba(44, 44, 44,.7)',
        backgroundSetting: 'rgba(44, 44, 44, .98)',
        backgroundWarning: '#c50000',
        backgroundErrorPage: '#1030b7',
        backgroundErrorMessage: '#ff0',
        fontDefault: '#000',
        fontPrimary: '#fffff0', // Ivory
        fontSecondary: '#1f2626',
        fontAccent: '#0ff',
        highlightYellow: '#ff0',
        highlightGreen: '#adff2f', // GreenYellow
        highlightBlue: '#e0ffff', // LightCyan
        shadow: 'rgba(0, 0, 0, .7)',
        debug: '#f00',
    },
    sizes: {
        lineHeight: '1.2',
        logoLineHeight: '0.7',
        smallSpace: '10px',
        mediumSpace: '15px',
        regularSpace: '20px',
        bigSpace: '30px',
        largeSpace: '40px',
        hugeSpace: '100px',
        thinBorder: '1px',
        mediumBorder: '2px',
        regularBorder: '3px',
        bigBorder: '4px',
        rootFont: '20px',
        defaultFont: '1rem',
        smallFont: '.8rem',
        mediumFont: '1.2rem',
        bigFont: '1.5rem',
        largeFont: '2rem',
        cardWidth: '400px',
        checkbox: '40px',
        headerHeight: '100px',
    },
    roundings: {
        card: '10px',
        search: '40px',
        circle: '50%',
        sphere: '100%',
    },
    opacities: {
        translucent: 0.5,
    },
    blurs: {
        regularBlur: '10px',
    },
    spreads: {
        shadow: '1px',
    },
    directions: {
        leftShadow: '-10px',
        bottomShadow: '10px',
    },
    shadows: {
        bottom: '0 5px 5px 1px rgba(0, 0, 0, .5)',
        bottomLeft: '-5px 5px 5px 1px rgba(0, 0, 0, .5)',
    },
    indexes: {
        menu: 300,
        header: 200,
        select: 100,
    },
    media: {
        mobile: 'screen and (max-width: 576px)', // 0-576
        tablet: 'screen and (max-width: 768px)', // 0-768
        desktop: 'screen and (min-width: 1140px)', // 1140-∞
    },
    breakpoints: {
        mobile: 360,
        tablet: 768,
    },
    emojis: {
        segoe: `Inter, Arial, Helvetica, sans-serif, 'Segoe UI Emoji', Noto`,
        noto: `Inter, Arial, Helvetica, sans-serif, Noto, 'Segoe UI Emoji'`,
    },
}
