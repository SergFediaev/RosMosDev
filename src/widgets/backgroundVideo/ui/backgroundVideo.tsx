import { S } from 'src/widgets/backgroundVideo/ui/backgroundVideo.styles.ts'
import { useRef, useState } from 'react'
import { EMOJIS, TITLES, VALUES } from 'src/shared/const'
import { FloatingButton } from 'src/shared/ui/floatingButton/floatingButton.tsx'
import { BackgroundOverlay } from 'src/widgets/backgroundOverlay/backgroundOverlay.tsx'
import { useAppSelector } from 'src/app/store.ts'
import { selectBackgroundVideo, selectHasBackgroundOverlay } from 'src/entities/background/model/backgroundSlice.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'

export const BackgroundVideo = () => {
    const lang = useAppSelector(selectLang)
    const backgroundVideo = useAppSelector(selectBackgroundVideo)
    const hasBackgroundOverlay = useAppSelector(selectHasBackgroundOverlay)

    const [isMuted, setIsMuted] = useState(true)
    const toggleIsMuted = () => setIsMuted(!isMuted)
    const soundIcon = isMuted ? EMOJIS.MUTE : EMOJIS.SOUND
    const soundTitle = isMuted ? TITLES[lang].ENABLE_BACKGROUND_SOUND : TITLES[lang].MUTE_BACKGROUND_SOUND

    const videoPlayer = useRef<HTMLVideoElement>(null)
    if (videoPlayer.current) videoPlayer.current.volume = VALUES.BACKGROUND_SOUND_VOLUME

    return (
        <>
            <S.BackgroundVideo
                src={backgroundVideo.value.source}
                muted={isMuted}
                onClick={toggleIsMuted}
                ref={videoPlayer}
                autoPlay
                loop
            />
            {hasBackgroundOverlay && <BackgroundOverlay />}
            {backgroundVideo.value.hasSound && (
                <FloatingButton icon={soundIcon} onClick={toggleIsMuted} title={soundTitle} />
            )}
        </>
    )
}
