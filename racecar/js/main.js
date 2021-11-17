const getData = async () => {
    let response = await axios.get(`https://ergast.com/api/f1/2020/2/driverStandings.json`)
    console.log(response.data)
    return response.data
}
// Create constants to hold DOM elements
const DOM_Elements = {
    racers: '.racer-list'
}