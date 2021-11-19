const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
}
// Create constants to hold DOM elements
const DOM_Elements = {
    rangers: '.ranger-list',
}

// Creation of the Ranger List HTML
const create_list = (id, name, color, season) =>{ 
    const html = `<a href ="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}"> Name: ${name} <li>color: ${color}</li>
    <li>season: ${season}</li><li>
    </a>`;
    // Access document to paste content
    document.querySelector(DOM_Elements.rangers).insertAdjacentHTML('beforeend', html)
}

// Function to Load Data and display HTML 

const loadData = async () => {
    const rangers = await getData();

    rangers.forEach( element => create_list(element.id, element.name, element.color[0], element.season));
}

const clearData = () =>{
    document.querySelector(DOM_Elements.rangers).innerHTML = '';
}