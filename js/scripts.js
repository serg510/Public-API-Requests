
const gallery = document.getElementById('gallery');
const body = document.querySelector('body');
// ------------------------------------------
//  FETCH FUNCTIONS
// -----------------------------------------
// one fetch-function for multiple fetches
function fetchData(url) {
    return fetch(url)
          //  .then(checkStatus)
            .then(res => res.json() )
          //  .catch(error => console.log('Looks like there was a problem', error))
  }
  
fetchData('https://randomuser.me/api/?results=12&nat=us')
    .then(data => {
        generateCard(data.results);
        modalClickHandler(data.results);
    })
    
    
    
    



// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

function generateCard(data){
    let employees = data;
    const html= employees.map( (data,index) => {

    return `<div class="card">
    <div class="card-img-container">
        <img class="card-img" src="${data.picture.large}" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">${data.name.last}, ${data.name.first}</h3>
        <p class="card-text">${data.email}</p>
        <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
        <p>${index}</p>
    </div>
</div>`}).join('');
gallery.innerHTML = html;
//console.log(data)

}
function generateModal(data,i){
    let  modal =  `
     <div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${data[i].picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${data[i].name}</h3>
                <p class="modal-text">${data[i].email}</p>
                <p class="modal-text cap">${data[i].location.city}</p>
                <hr>
                <p class="modal-text">${data[i].phone}</p>
                <p class="modal-text">${data[i].location.street}</p>
                <p class="modal-text">Birthday:${data[i].dob}</p>
            </div>
        </div>
    </div>
    `;
    
    return modal;
    
}
console.log('modal')
//console.log(modalClickHandler)
// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

function modalClickHandler(data){
     const cards = document.querySelectorAll('.card');
    
    for(let i =0; i< cards.length; i++){
         cards[i].addEventListener('click', () => {
            
            //console.log(e.currentTarget)
            //document.querySelector("body")
            body.appendChild(generateModal(data,i))
       }) 
    }
}



