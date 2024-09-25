export const loaderPersonajes = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data = await res.json()

    return { personajes: data.results }
}