const card = document.querySelector('.card');
const gallery = document.getElementById('gallery')
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
    .then(data => {
        generateCard(data)
        modalClickHandler(data)
    })
    
    



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
function modalClickHandler(data){
    const cards = document.querySelectorAll('.cards');

    for(let i =0; i< cards.length; i++){
       cards[i].addEventListener('click', () => {

        gallery.append(generateModal(data,i))
       }) 
    }
}


function generateModal(data,i){
    

     return  `<div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${data[i].picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${data[i].name}</h3>
                <p class="modal-text">email</p>
                <p class="modal-text cap">city</p>
                <hr>
                <p class="modal-text">(555) 555-5555</p>
                <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                <p class="modal-text">Birthday: 10/21/2015</p>
            </div>
        </div>

    `
    
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

// document.addEventListener('click', (e) => {
//     console.log(e.target)
// })


