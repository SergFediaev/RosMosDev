import { S } from 'src/widgets/backgroundVideo/ui/backgroundVideo.styles.ts'
import { useSelector } from 'react-redux'
import { useRef, useState } from 'react'
import { EMOJIS, TITLES, VALUES } from 'src/shared/const'
import { FloatingButton } from 'src/shared/ui/floatingButton/floatingButton.tsx'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { selectBackgroundVideo } from 'src/widgets/backgroundVideo/model/backgroundVideo.selectors.ts'
import { selectHasBackgroundOverlay } from 'src/widgets/backgroundOverlay/model/backgroundOverlay.selectors.ts'
import { BackgroundOverlay } from 'src/widgets/backgroundOverlay/ui/backgroundOverlay.tsx'

export const BackgroundVideo = () => {
    const lang = useSelector(selectLang)
    const backgroundVideo = useSelector(selectBackgroundVideo)
    const hasBackgroundOverlay = useSelector(selectHasBackgroundOverlay)

    const [isMuted, setIsMuted] = useState(true)
    const toggleIsMuted = () => setIsMuted(!isMuted)
    const soundIcon = isMuted ? EMOJIS.MUTE : EMOJIS.SOUND
    const soundTitle = isMuted ? TITLES[lang].ENABLE_BACKGROUND_SOUND : TITLES[lang].MUTE_BACKGROUND_SOUND

    const videoPlayer = useRef<HTMLVideoElement>(null)
    if (videoPlayer.current) videoPlayer.current.volume = VALUES.BACKGROUND_SOUND_VOLUME

    return (
        <>
            <S.BackgroundVideo
                src={backgroundVideo.source}
                muted={isMuted}
                onClick={toggleIsMuted}
                ref={videoPlayer}
                autoPlay
                loop
            />
            {hasBackgroundOverlay && <BackgroundOverlay />}
            {backgroundVideo.hasSound && <FloatingButton icon={soundIcon} onClick={toggleIsMuted} title={soundTitle} />}
        </>
    )
}
