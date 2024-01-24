export const localstorage = {
    get: (key) => JSON.parse(localStorage.getItem(key)),
    set: (key, item) => localStorage.setItem(key, JSON.stringify(item))
}