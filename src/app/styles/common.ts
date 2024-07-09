const DEFAULT_UNIT = 'rem'

type ClampSize = {
    min?: number
    preferred?: string
    max?: number
    unit?: string
}

export const clampSize = ({
    min = 10,
    preferred = `1${DEFAULT_UNIT} + 2vw`,
    max = 20,
    unit = DEFAULT_UNIT,
}: ClampSize) => `clamp(${min}${unit}, calc(${preferred}), ${max}${unit})`
