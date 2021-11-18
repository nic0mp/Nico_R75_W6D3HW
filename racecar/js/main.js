const form = document.querySelector('#form')
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let season = document.querySelector('#season');
    let round = document.querySelector('#round');
    let jsonData = getData(season,round)
})

const getData = async () => {
    let response = await axios.get(`https://ergast.com/api/f1/${year}/${round}/driverStandings.json`)
    console.log(response.data.MRData.StandingsTable.StandingsList[0].DriverStandings)
    return response.data.MRData.StandingsTable.StandingsList[0].DriverStandings
}
// Create constants to hold DOM elements
const DOM_Elements = {
    racers: '.racer-list'
}

const create_list = (driverId,position,givenName,familyName,nationality,sponsor,points)=>{
    const html =`<a href = '#' class = "list-group-item list-group-item-action list-group-item-light" id="${driverId}"> 
    Position: ${position} Name: ${name}`
    document.querySelector(DOM_Elelments.racers).insertAdjacentHTML('beforeend', html)
}
const loadData = async (jsonData) =>{
    const racerlist = await jsonData

    racerlist.forEach(element => create_list(element.Driver.driverId, element.position, element.Driver.givenName, element.Driver.familyName, element.Driver,dateOfBirth))
    console.log(racerlist[0])
}

