export const loaderPersonajeIndividual = async ({params}) => {
    const res = await fetch('https://rickandmortyapi.com/api/character/'+params.id);
    const data = await res.json()

    return { personajeInd: data }
}