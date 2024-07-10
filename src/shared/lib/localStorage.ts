export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : defaultValue
}

export const setToLocalStorage = <T>(key: string, value: T) => localStorage.setItem(key, JSON.stringify(value))

export const removeFromLocalStorage = (key: string) => localStorage.removeItem(key)

export const clearLocalStorage = () => localStorage.clear()
