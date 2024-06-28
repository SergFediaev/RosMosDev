import ocean from 'src/shared/assets/video/ocean50.mp4'
import beach from 'src/shared/assets/video/beach50.mp4'
import fireplace from 'src/shared/assets/video/fireplace30.mp4'
import motivate from 'src/shared/assets/video/motivate40.mp4'
import walking from 'src/shared/assets/video/walking40.mp4'
import pain from 'src/shared/assets/video/pain50.mp4'
import { BackgroundVideo } from 'src/widgets/backgroundVideo/types/backgroundVideo.types.ts'
import { SYMBOLS, TEXTS, VALUES } from 'src/shared/const'
import { Lang } from 'src/shared/types/language.ts'

export const getBackgroundVideos = (lang: Lang = VALUES.EN): BackgroundVideo[] => [
    {
        label: TEXTS[lang].OCEAN,
        value: {
            source: ocean,
        },
    },
    {
        label: `${TEXTS[lang].BEACH} ${SYMBOLS.DOUBLE_NOTE}`,
        value: {
            source: beach,
            hasSound: true,
        },
    },
    {
        label: `${TEXTS[lang].FIREPLACE} ${SYMBOLS.DOUBLE_NOTE}`,
        value: {
            source: fireplace,
            hasSound: true,
        },
    },
    {
        label: `${TEXTS[lang].MOTIVATE} ${SYMBOLS.DOUBLE_NOTE}`,
        value: {
            source: motivate,
            hasSound: true,
        },
    },
    {
        label: `${TEXTS[lang].WALKING} ${SYMBOLS.DOUBLE_NOTE}`,
        value: {
            source: walking,
            hasSound: true,
        },
    },
    {
        label: `${TEXTS[lang].PAIN} ${SYMBOLS.DOUBLE_NOTE}`,
        value: {
            source: pain,
            hasSound: true,
        },
    },
]
