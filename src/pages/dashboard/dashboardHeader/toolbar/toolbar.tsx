import { useSelector } from 'react-redux'
import { useAppDispatch } from 'src/app/store.ts'
import { selectHasSortedCards, Sort } from 'src/features/sortCards'
import { Filter } from 'src/features/filterCards'
import { Search } from 'src/widgets/search/search.tsx'
import { Select } from 'src/shared/ui/select/select.tsx'
import { EMOJIS, TITLES, VALUES } from 'src/shared/const'
import {
    selectCards,
    selectHasCardFilters,
    setCardsFilter,
    setCardsSort,
    toggleIsLearningMode,
} from 'src/entities/card'
import { selectLang } from 'src/entities/setting/model/setting.selectors.ts'
import { S } from './toolbar.styles.ts'
import { LogoAcronym } from 'src/shared/ui/logoAcronym/logoAcronym.tsx'
import { IconButton } from 'src/shared/ui/buttonIcon/iconButton.tsx'

export const Toolbar = () => {
    const lang = useSelector(selectLang)
    const dispatch = useAppDispatch()
    const cards = useSelector(selectCards)
    const hasSortedCards = useSelector(selectHasSortedCards)
    const hasCardFilters = useSelector(selectHasCardFilters)
    const cardsModeIcon = cards.isLearningMode ? EMOJIS.TRAINING : EMOJIS.LEARNING
    const cardsModeTitle = cards.isLearningMode ? TITLES[lang].ENABLE_TRAINING_MODE : TITLES[lang].ENABLE_LEARNING_MODE

    const onSelectSort = (sort: Sort) => dispatch(setCardsSort({ sort }))
    const onSelectFilter = (filter: Filter) => dispatch(setCardsFilter({ filter }))
    const onToggleIsLearningMode = () => dispatch(toggleIsLearningMode())

    return (
        <S.Toolbar>
            <LogoAcronym />
            <Search />
            {hasSortedCards && (
                <Select
                    options={cards.sorts}
                    selectedOption={cards.sort.label}
                    onSelect={onSelectSort}
                    title={TITLES[lang].CARD_SORTING}
                />
            )}
            {hasCardFilters && (
                <Select
                    options={cards.filters}
                    selectedOption={cards.filter.label}
                    onSelect={onSelectFilter}
                    title={TITLES[lang].CARD_CATEGORIES}
                />
            )}
            <IconButton
                icon={cardsModeIcon}
                onClick={onToggleIsLearningMode}
                title={cardsModeTitle}
                iconSize={VALUES.BIG_SIZE}
            />
        </S.Toolbar>
    )
}
