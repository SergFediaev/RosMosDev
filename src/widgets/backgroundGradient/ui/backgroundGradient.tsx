import { S } from 'src/widgets/backgroundGradient/ui/backgroundGradient.styles.ts'
import { randomGradient } from 'src/widgets/backgroundGradient/lib/randomGradient.ts'

export const BackgroundGradient = () => {
    const { angle, firstColor, secondColor, thirdColor } = randomGradient()

    return (
        <S.BackgroundGradient angle={angle} firstColor={firstColor} secondColor={secondColor} thirdColor={thirdColor} />
    )
}
