function getCharacters () {
    return fetch('https://animation-contemplation-api.fly.dev/characters')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to get characters')
            }
            return response.json()
        })
}
function getQuotes (character) {
    return fetch(`https://animechan.vercel.app/api/quotes/character?name=${character}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to get quotes')
            }
            return response.json()
        })
}

export { getCharacters, getQuotes };