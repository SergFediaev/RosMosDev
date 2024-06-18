import { S } from './search.styles.ts'
import { useAppDispatch } from 'src/app/store.ts'
import { useSelector } from 'react-redux'
import { selectSearchCards } from 'src/entities/card/model/card.selectors.ts'
import { ChangeEvent, useRef } from 'react'
import { searchCards } from 'src/entities/card/model/cardSlice.ts'
import { EMOJIS, TEXTS, TITLES, TYPES, VALUES } from 'src/shared/const'
import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'

export const Search = () => {
    const lang = 'en'
    const dispatch = useAppDispatch()
    const search = useSelector(selectSearchCards)
    const icon = search ? EMOJIS.CANCEL : EMOJIS.SEARCH
    const title = search ? TITLES[lang].CLEAR_SEARCH : TITLES[lang].SEARCH
    const input = useRef<HTMLInputElement>(null)

    const onSearch = (event: ChangeEvent<HTMLInputElement>) =>
        dispatch(searchCards({ search: event.currentTarget.value }))

    const onFocusSearch = () => input.current?.focus()

    const onClearSearch = () => dispatch(searchCards({ search: VALUES.EMPTY_STRING }))

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
