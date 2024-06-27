const randomAngle = () => Math.floor(Math.random() * 360)

const randomColor = () => Math.floor(Math.random() * 256)

const randomRgbaColor = () => {
    const red = randomColor()
    const green = randomColor()
    const blue = randomColor()
    const alpha = 1
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

export const randomGradient = () =>
    `linear-gradient(${randomAngle()}deg, ${randomRgbaColor()}, ${randomRgbaColor()}, ${randomRgbaColor()})`
