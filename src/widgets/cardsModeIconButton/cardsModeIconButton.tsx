import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'
import { EMOJIS, TITLES, VALUES } from 'src/shared/const'
import { selectIsLearningMode, toggleIsLearningMode } from 'src/entities/card'
import { useAppDispatch, useAppSelector } from 'src/app/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'

export const CardsModeIconButton = () => {
    const lang = useAppSelector(selectLang)
    const dispatch = useAppDispatch()
    const isLearningMode = useAppSelector(selectIsLearningMode)
    const cardsModeIcon = isLearningMode ? EMOJIS.TRAINING : EMOJIS.LEARNING
    const cardsModeTitle = isLearningMode ? TITLES[lang].ENABLE_TRAINING_MODE : TITLES[lang].ENABLE_LEARNING_MODE
    const onToggleIsLearningMode = () => dispatch(toggleIsLearningMode())

    return (
        <IconButton
            icon={cardsModeIcon}
            onClick={onToggleIsLearningMode}
            title={cardsModeTitle}
            iconSize={VALUES.BIG_SIZE}
        />
    )
}
