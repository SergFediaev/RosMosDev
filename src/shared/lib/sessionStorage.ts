export const getFromSessionStorage = <T>(key: string, defaultValue: T): T => {
    const value = sessionStorage.getItem(key)
    return value ? JSON.parse(value) : defaultValue
}

export const setToSessionStorage = <T>(key: string, value: T) => sessionStorage.setItem(key, JSON.stringify(value))

export const clearSessionStorage = () => sessionStorage.clear()
