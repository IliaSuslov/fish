export const genderItems = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Genderless', value: 'Genderless' },
    { label: 'Unknown', value: 'Unknown' }
]
export const statusItems = [
    { label: 'Alive', value: 'Alive' },
    { label: 'Dead', value: 'Dead' },
    { label: 'Unknown', value: 'Unknown' }
]
export const fetchData = async (url) => {
    let response = {};
    let error = '';
    try {
        const data = await fetch(url)
        response = await data.json()
    } catch (err) {
        error = err
    }

    return { response, error }

}
export const BASEURL = new URL('https://rickandmortyapi.com/api')