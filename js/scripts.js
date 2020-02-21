const card = document.querySelector('.card');
const gallery = document.getElementById('gallery');
const body = document.querySelector('body');
// ------------------------------------------
//  FETCH FUNCTIONS
// -----------------------------------------
function fetchData(url) {
    return fetch(url)
          //  .then(checkStatus)
            .then(res => res.json() )
          //  .catch(error => console.log('Looks like there was a problem', error))
  }
  
fetchData('https://randomuser.me/api/?results=12&nat=us')
    .then(data => generateCard(data))
    .then(data => modalClickHandler(data))
    
    



// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateCard(data){
    let employees = data.results;
    const html= employees.map( (person,index) => {

    return `<div class="card">
    <div class="card-img-container">
        <img class="card-img" src="${person.picture.large}" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">${person.name.last}, ${person.name.first}</h3>
        <p class="card-text">${person.email}</p>
        <p class="card-text cap">${person.location.city}, ${person.location.state}</p>
        <p>${index}</p>
    </div>
</div>`}).join('');
gallery.innerHTML = html;
//console.log(data)

}
function generateModal(data,i){
    let employee = data.results;
    let html = employee.map( (person) => {
     return  `
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${person[i].picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${person[i].name}</h3>
                <p class="modal-text">${person[i].email}</p>
                <p class="modal-text cap">${person[i].location.city}</p>
                <hr>
                <p class="modal-text">${person[i].phone}</p>
                <p class="modal-text">${person[i].location.street}</p>
                <p class="modal-text">Birthday:${person[i].dob}</p>
            </div>one
    `});
    document.createElement('DIV').classList.add("modal-container");
    document.querySelector(".modal-container").innerHTML = html;
}
//console.log(modalClickHandler)
// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// document.addEventListener('click', (e) => {
//     console.log(e.target)
// })

function modalClickHandler(data){
    
    const modal = document.querySelector(".modal-container");
    const cards = document.querySelectorAll('.card');
    
    for(let i =0; i< cards.length; i++){
         cards[i].addEventListener('click', () => {
            
             //console.log(e.currentTarget)
            //document.querySelector("body")
            gallery.appendChild(modal)
       }) 
    }
}



