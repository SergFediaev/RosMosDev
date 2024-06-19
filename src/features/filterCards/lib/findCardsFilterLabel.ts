import { Options } from 'src/shared/ui/select/select.tsx'

export const findCardsFilterLabel = (options: Options<string>, value: string) =>
    options.find(option => option.value === value)?.label || options[0].label
