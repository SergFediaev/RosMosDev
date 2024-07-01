import { S } from './search.styles.ts'
import { useAppDispatch, useAppSelector } from 'src/app/store.ts'
import { selectCardsSearch, setCardsSearch } from 'src/entities/card'
import { EMOJIS, TEXTS, TITLES, TYPES, VALUES } from 'src/shared/const'
import { ChangeEvent, useRef } from 'react'
import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'

export const Search = () => {
    const lang = useAppSelector(selectLang)
    const dispatch = useAppDispatch()
    const search = useAppSelector(selectCardsSearch)
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
