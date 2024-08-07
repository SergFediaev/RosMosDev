import { S } from './select.styles.ts'
import { KeyboardEvent, MouseEvent, useState } from 'react'
import { BUTTONS, SYMBOLS } from 'src/shared/const'
import { Icon } from 'src/shared/ui/icon/icon.tsx'

type Props<T> = {
    options: Option<T>[]
    selectedOption: string
    onSelect: (option: Option<T>) => void
    isSelectionEndless?: boolean
    title?: string
}

type Option<T> = {
    label: string
    value: T
}

export const Select = <T,>({ options, isSelectionEndless = true, title, ...props }: Props<T>) => {
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

    const onClickOption = (option: Option<T>) => {
        props.onSelect(option)
        closeSelect()
    }

    const onKeyDownSelect = (event: KeyboardEvent) => {
        event.preventDefault()

        if (event.key === BUTTONS.ESCAPE) {
            closeSelect()
            return
        }

        const selectedOptionIndex = options.findIndex(option => option.label === selectedOption)

        if (event.key === BUTTONS.ENTER) {
            if (isSelectOpened) {
                if (props.selectedOption !== selectedOption) props.onSelect(options[selectedOptionIndex])
                closeSelect()
            } else openSelect()

            return
        }

        let stepIndex = selectedOptionIndex

        if (event.key === BUTTONS.ARROW_UP) {
            stepIndex -= 1

            if (stepIndex < 0) {
                if (!isSelectionEndless) return
                stepIndex = options.length - 1
            }
        }

        if (event.key === BUTTONS.ARROW_DOWN) {
            stepIndex += 1

            if (stepIndex > options.length - 1) {
                if (!isSelectionEndless) return
                stepIndex = 0
            }
        }

        for (let i = 0; i < options.length; i++) {
            if (selectedOption === options[i].label) {
                setSelectedOption(options[stepIndex].label)
                props.onSelect(options[stepIndex])
                return
            }
        }
    }

    return (
        <S.Select onMouseEnter={onMouseEnterSelect} onKeyDown={onKeyDownSelect} tabIndex={0} onBlur={closeSelect}>
            <S.Selected onClick={toggleIsSelectOpen} title={title}>
                <S.SelectedOption>{props.selectedOption}</S.SelectedOption>
                <Icon icon={iconSelect} />
            </S.Selected>
            {isSelectOpened && (
                <S.Options onMouseLeave={onMouseLeaveOptions}>
                    {options.map((option, index) => (
                        <S.Option
                            key={index}
                            onClick={() => onClickOption(option)}
                            isHovered={selectedOption === option.label}
                            onMouseEnter={() => setSelectedOption(option.label)}>
                            {option.label}
                        </S.Option>
                    ))}
                </S.Options>
            )}
        </S.Select>
    )
}
