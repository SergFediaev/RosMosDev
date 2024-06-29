import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'
import { EMOJIS, TITLES, VALUES } from 'src/shared/const'
import { useSelector } from 'react-redux'
import { selectIsLearningMode, toggleIsLearningMode } from 'src/entities/card'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { useAppDispatch } from 'src/app/store.ts'

export const CardsModeIconButton = () => {
    const lang = useSelector(selectLang)
    const dispatch = useAppDispatch()
    const isLearningMode = useSelector(selectIsLearningMode)
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
