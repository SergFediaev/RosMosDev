import { EMOJIS, TITLES, VALUES } from 'src/shared/const'
import { selectIsLearningMode, setIsLearningMode } from 'src/entities/card'
import { useAppDispatch, useAppSelector } from 'src/app/store/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import { IconButton } from 'src/shared/ui/iconButton/iconButton.tsx'

export const CardsModeIconButton = () => {
    const lang = useAppSelector(selectLang)
    const dispatch = useAppDispatch()
    const isLearningMode = useAppSelector(selectIsLearningMode)
    const cardsModeIcon = isLearningMode ? EMOJIS.TRAINING : EMOJIS.LEARNING
    const cardsModeTitle = isLearningMode ? TITLES[lang].ENABLE_TRAINING_MODE : TITLES[lang].ENABLE_LEARNING_MODE
    const toggleIsLearningMode = () => dispatch(setIsLearningMode({ isLearningMode: !isLearningMode }))

    return (
        <IconButton
            icon={cardsModeIcon}
            onClick={toggleIsLearningMode}
            title={cardsModeTitle}
            iconSize={VALUES.BIG_SIZE}
        />
    )
}
