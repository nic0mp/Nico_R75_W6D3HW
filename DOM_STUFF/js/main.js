console.log(document.getElementsByTagName('h1')[0].innerHTML = 'Hola Mundo!')

let color_button = document.getElementById('color-button')
console.log(color_button)

function color_change(){
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    if(header_text== 'Hola Mundo!'){
        document.getElementsByTagName('h1')[0].className = 'color-change'
    } else {
        header_text = 'Something Else'
    }
}

// // Change text color via event listener in js
color_button.addEventListener('click', color_change)

// // Adding New Button via JS
let button = document.createElement('button')
let button_display = document.createElement('h2')
// Add text to the button
button.innerHTML = ' Here I am'
document.body.append(button)

button.addEventListener('click', function (){
    button_display.innerHTML = 'More JS Info Here ...'
    document.body.append(button_display)
})

// // Grab copied text
const source = document.querySelector('div.source')
source.addEventListener('copy', (event ) =>{
    
    console.log(event)
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toLowerCase());
    event.preventDefault();
})

// // Create variale for form
const form = document.querySelector('#testDataForm')
console.log(form)

// // Add event listener for submit event
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let query_first = document.querySelector('#first-name');
    let query_last = document.querySelector('#last-name');
    console.log(query_first)
    console.log(event)
    // let first_name = event.path[0][0].value;
    // let last_name = event.path[0][1].value;
    
    
    // console.log(`This came from the query selector: ${first_name}, ${last_name}`)
} )