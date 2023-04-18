export async function fetchBio(person) {
    const delay = person === 'Bob' ? 2000 : 200;
    return new Promise(resole => {
        setTimeout(() => {
            resole('This is ' + person + '’s bio.')
        }, delay)
    })
}