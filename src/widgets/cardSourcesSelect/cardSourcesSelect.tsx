import { Select } from 'src/shared/ui/select/select.tsx'
import { TITLES } from 'src/shared/const'
import { selectCardSources, selectCardsSource, setSourceAndFetchCards } from 'src/entities/card'
import { useAppDispatch, useAppSelector } from 'src/app/store/store.ts'
import { selectLang } from 'src/entities/setting/model/settingSlice.ts'
import { Source } from 'src/features/cardsSource/model/cardsSource.types.ts'

export const CardSourcesSelect = () => {
    const lang = useAppSelector(selectLang)
    const dispatch = useAppDispatch()
    const cardsSource = useAppSelector(selectCardsSource)
    const cardSources = useAppSelector(selectCardSources)

    const onSelectSource = (source: Source) => dispatch(setSourceAndFetchCards(source))

    return (
        <Select
            options={cardSources}
            selectedOption={cardsSource.label}
            onSelect={onSelectSource}
            title={TITLES[lang].CARDS_SOURCE}
        />
    )
}
