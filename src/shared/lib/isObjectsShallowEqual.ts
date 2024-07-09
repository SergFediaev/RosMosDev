// ToDo: Refactor recursive deep equality.
export const isObjectsShallowEqual = <T>(objectA: Record<string, T>, objectB: Record<string, T>) => {
    if (objectA === objectB) return true

    if (!objectA || !objectB) return false

    const keysA = Object.keys(objectA)
    const keysB = Object.keys(objectB)

    if (keysA.length !== keysB.length) return false

    return keysA.every(key => key in objectB && objectA[key] === objectB[key])
}
