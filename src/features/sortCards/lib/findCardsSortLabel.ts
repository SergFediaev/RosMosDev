import { Options } from 'src/shared/ui/select/select.tsx'
import { Sort } from 'src/features/sortCards'

export const findCardsSortLabel = (options: Options<Sort>, { sortBy, sortDirection }: Sort) =>
    options.find(option => option.value.sortBy === sortBy && option.value.sortDirection === sortDirection)?.label ||
    options[0].label
