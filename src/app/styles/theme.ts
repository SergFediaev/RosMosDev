import { clampSize } from 'src/app/styles/common.ts'

export const theme = {
    colors: {
        backgroundDefault: '#808080', // Gray
        backgroundPrimary: 'rgba(44, 44, 44)',
        backgroundSecondary: '#f5f5f5', // Whitesmoke
        backgroundTertiary: 'rgba(0, 48, 98)',
        backgroundAccent: '#2268d0',
        backgroundAlternative: '#f8f8ff', // Ghostwhite
        backgroundOverlay: 'rgba(0, 0, 0, .5)',
        backgroundHeader: 'rgba(44, 44, 44,.7)',
        backgroundSetting: 'rgba(44, 44, 44, .96)',
        backgroundWarning: '#c50000',
        backgroundErrorPage: '#1030b7',
        backgroundErrorMessage: '#ff0',
        fontDefault: '#000',
        fontPrimary: '#fffff0', // Ivory
        fontSecondary: '#1f2626',
        fontAccent: '#0ff',
        positive: '#00ff00', // Lime
        negative: '#ff4500', // Orangered
        highlightYellow: '#ff0',
        highlightGreen: '#adff2f', // GreenYellow
        highlightBlue: '#e0ffff', // LightCyan
        shadow: 'rgba(0, 0, 0, .7)',
        debug: '#f00',
    },
    sizes: {
        lineHeight: '1.2',
        logoLineHeight: '0.7',
        smallSpace: clampSize({ min: 6, max: 10 }),
        mediumSpace: clampSize({ min: 10, max: 15 }),
        regularSpace: clampSize({ min: 16, max: 20 }),
        bigSpace: clampSize({ min: 20, max: 30 }),
        largeSpace: clampSize({ min: 20, max: 40 }),
        hugeSpace: clampSize({ min: 50, max: 100 }),
        thinBorder: '1rem',
        mediumBorder: '2rem',
        regularBorder: '3rem',
        bigBorder: '4rem',
        rootFont: '6.25%', // 1 ÷ 16 × 100 = 6.25
        defaultFont: clampSize({ min: 16, max: 20 }),
        smallFont: clampSize({ min: 14, max: 18 }),
        mediumFont: clampSize({ min: 18, max: 22 }),
        bigFont: clampSize({ min: 20, max: 25 }),
        largeFont: clampSize({ min: 30, max: 40 }),
        cardWidth: '500rem',
        viewCardWidth: '1200rem',
        checkbox: clampSize({ min: 30, max: 40 }),
        headerHeight: '100rem',
        selectWidth: '300rem',
        selectHeight: clampSize({ min: 300, preferred: '40vh', max: 600 }),
    },
    roundings: {
        card: '10rem',
        search: '40rem',
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
    degrees: {
        flip: '180deg',
    },
    perspectives: {
        card: '1000px',
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
    fonts: {
        monospace: `Consolas, 'Lucida Console', monospace`,
    },
    emojis: {
        segoe: `Inter, Arial, Helvetica, sans-serif, 'Segoe UI Emoji', Noto`,
        noto: `Inter, Arial, Helvetica, sans-serif, Noto, 'Segoe UI Emoji'`,
    },
}
