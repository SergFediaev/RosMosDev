import { S } from './select.styles.ts'
import { KeyboardEvent, MouseEvent, useState } from 'react'
import { KEYS, SYMBOLS } from 'src/shared/const'
import { Icon } from 'src/shared/ui/icon/icon.tsx'

type Props<T> = {
    options: T[]
    selectedOption: T
    onSelect: (option: T) => void
    isSelectionEndless?: boolean
}

export const Select = <T,>({ options, isSelectionEndless = true, ...props }: Props<T>) => {
    const [isSelectOpened, setIsSelectOpened] = useState(false)
    const [selectedOption, setSelectedOption] = useState(props.selectedOption)
    const iconSelect = isSelectOpened ? SYMBOLS.UP : SYMBOLS.DOWN

    const openSelect = () => setIsSelectOpened(true)
    const closeSelect = () => setIsSelectOpened(false)
    const toggleIsSelectOpen = () => setIsSelectOpened(!isSelectOpened)

    const onMouseEnterSelect = (event: MouseEvent<HTMLElement>) => {
        event.currentTarget.focus()
        openSelect()
    }

    const onMouseLeaveOptions = (event: MouseEvent<HTMLElement>) => {
        event.currentTarget.blur()
        closeSelect()
    }

    const onClickOption = (option: T) => {
        props.onSelect(option)
        closeSelect()
    }

    const onKeyDownSelect = (event: KeyboardEvent) => {
        event.preventDefault()

        if (event.key === KEYS.ENTER) {
            if (isSelectOpened) {
                if (props.selectedOption !== selectedOption) props.onSelect(selectedOption)
                closeSelect()
            } else openSelect()

            return
        }

        if (event.key === KEYS.ESCAPE) {
            closeSelect()
            return
        }

        let stepIndex = options.indexOf(selectedOption)

        if (event.key === KEYS.ARROW_UP) {
            stepIndex -= 1

            if (stepIndex < 0) {
                if (!isSelectionEndless) return
                stepIndex = options.length - 1
            }
        }

        if (event.key === KEYS.ARROW_DOWN) {
            stepIndex += 1

            if (stepIndex > options.length - 1) {
                if (!isSelectionEndless) return
                stepIndex = 0
            }
        }

        for (let i = 0; i < options.length; i++) {
            if (selectedOption === options[i]) {
                setSelectedOption(options[stepIndex])
                props.onSelect(options[stepIndex])
                return
            }
        }
    }

    return (
        <S.Select onMouseEnter={onMouseEnterSelect} onKeyDown={onKeyDownSelect} tabIndex={0} onBlur={closeSelect}>
            <S.Selected onClick={toggleIsSelectOpen}>
                <span>{props.selectedOption as string}</span>
                <Icon icon={iconSelect} />
            </S.Selected>
            {isSelectOpened && (
                <S.Options onMouseLeave={onMouseLeaveOptions}>
                    {options.map((option, index) => (
                        <S.Option
                            key={index}
                            onClick={() => onClickOption(option)}
                            isHovered={selectedOption === option}
                            onMouseEnter={() => setSelectedOption(option)}>
                            {option as string}
                        </S.Option>
                    ))}
                </S.Options>
            )}
        </S.Select>
    )
}
