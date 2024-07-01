import { S } from './spoiler.styles.ts'
import { ReactNode, useEffect, useState } from 'react'
import { TITLES } from 'src/shared/const'
import { selectIsLearningMode } from 'src/entities/card'
import { useAppSelector } from 'src/app/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'

type Props = {
    children: ReactNode
}

export const Spoiler = ({ children }: Props) => {
    const lang = useAppSelector(selectLang)
    const isLearningMode = useAppSelector(selectIsLearningMode)
    const [isOpen, setIsOpen] = useState(isLearningMode)
    const answerTitle = isOpen ? TITLES[lang].HIDE_ANSWER : TITLES[lang].SHOW_ANSWER
    const toggleIsOpen = () => setIsOpen(!isOpen)

    useEffect(() => setIsOpen(isLearningMode), [isLearningMode, children])

    return (
        <S.Spoiler isOpen={isOpen} onClick={toggleIsOpen} title={answerTitle}>
            <S.Front />
            <S.Back>{children}</S.Back>
        </S.Spoiler>
    )
}
