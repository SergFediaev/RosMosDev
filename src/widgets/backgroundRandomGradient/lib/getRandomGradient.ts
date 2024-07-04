const getRandomAngle = () => Math.floor(Math.random() * 360)

const getRandomColor = () => Math.floor(Math.random() * 256)

const getRandomRgbaColor = () => `rgba(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${1})`

export const getRandomGradient = () =>
    `linear-gradient(${getRandomAngle()}deg, ${getRandomRgbaColor()}, ${getRandomRgbaColor()}, ${getRandomRgbaColor()})`
