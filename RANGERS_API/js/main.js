// Get our ranger data
const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
}
// Create constants to hold DOM elements
const DOM_Elements = {
    rangers: '.ranger-list',
}

// Creation of the Ranger List HTML.. actual text that shows up
const create_list = (id, name, color, season, powercoin, morpcoin) =>{ 
    const html = `<a href ="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}"> Name: ${name} <li>color: ${color}</li>
    <li>season: ${season}</li><li>powercoin: ${powercoin}</li><li>morpcoin: ${morpcoin}</li></a>`;
    
    // Access document to paste content
    document.querySelector(DOM_Elements.rangers).insertAdjacentHTML('beforeend', html)
}

// Function to Load Data and display HTML 

const loadData = async () => {
    const rangerList = await getData();

    rangerList.forEach( element => create_list(element.id, element.name, element.color, element.season,element['power-coin'],element['morp-coin']));
}

const clearData = () =>{
    document.querySelector(DOM_Elements.rangers).innerHTML = '';
}