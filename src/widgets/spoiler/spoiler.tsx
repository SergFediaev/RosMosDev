import { S } from './spoiler.styles.ts'
import { ReactNode, useEffect, useState } from 'react'
import { TITLES } from 'src/shared/const'
import { useSelector } from 'react-redux'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { selectIsLearningMode } from 'src/entities/card'

type Props = {
    children: ReactNode
}

export const Spoiler = ({ children }: Props) => {
    const lang = useSelector(selectLang)
    const isLearningMode = useSelector(selectIsLearningMode)
    const [isOpen, setIsOpen] = useState(isLearningMode)
    const answerTitle = isOpen ? TITLES[lang].HIDE_ANSWER : TITLES[lang].SHOW_ANSWER
    const toggleIsOpen = () => setIsOpen(!isOpen)

    useEffect(() => setIsOpen(isLearningMode), [isLearningMode])

    return (
        <S.Spoiler isOpen={isOpen} onClick={toggleIsOpen} title={answerTitle}>
            <S.Front />
            <S.Back>{children}</S.Back>
        </S.Spoiler>
    )
}
