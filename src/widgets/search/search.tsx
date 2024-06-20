import { S } from './search.styles.ts'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'src/app/store.ts'
import { selectCardsSearch, setCardsSearch } from 'src/entities/card'
import { EMOJIS, TEXTS, TITLES, TYPES, VALUES } from 'src/shared/const'
import { ChangeEvent, useRef } from 'react'
import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'

export const Search = () => {
    const lang = 'en'
    const dispatch = useAppDispatch()
    const search = useSelector(selectCardsSearch)
    const icon = search ? EMOJIS.CANCEL : EMOJIS.SEARCH
    const title = search ? TITLES[lang].CLEAR_SEARCH : TITLES[lang].SEARCH
    const input = useRef<HTMLInputElement>(null)

    const onSearch = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(setCardsSearch({ search: event.currentTarget.value }))

    const onFocusSearch = () => input.current?.focus()

    const onClearSearch = () => dispatch(setCardsSearch({ search: VALUES.EMPTY_STRING }))

    const onClick = search ? onClearSearch : onFocusSearch

    return (
        <S.Search>
            <IconButton icon={icon} onClick={onClick} title={title} />
            <input
                type={TYPES.TEXT}
                placeholder={TEXTS[lang].CARD_SEARCH}
                value={search}
                onChange={onSearch}
                ref={input}
            />
        </S.Search>
    )
}
