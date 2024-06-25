import { theme } from 'src/app/styles/theme.ts'

const randomAngle = () => Math.floor(Math.random() * 360)

const randomColor = () => Math.floor(Math.random() * 256)

const randomRgbaColor = () => {
    const red = randomColor()
    const green = randomColor()
    const blue = randomColor()
    const alpha = theme.opacities.translucent
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

export const randomGradient = () => ({
    angle: randomAngle(),
    firstColor: randomRgbaColor(),
    secondColor: randomRgbaColor(),
    thirdColor: randomRgbaColor(),
})
