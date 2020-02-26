
const gallery = document.getElementById('gallery');
const body = document.getElementsByTagName('body')[0];

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
  //currently not working
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
    const html= employees.map( (data) => {

    return `<div class="card">
    <div class="card-img-container">
        <img class="card-img" src="${data.picture.large}" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">${data.name.last}, ${data.name.first}</h3>
        <p class="card-text">${data.email}</p>
        <p class="card-text cap">${data.location.city}, ${data.location.state}</p>
        
    </div>
</div>`}).join('');
gallery.innerHTML = html;
//console.log(data)

}
function generateModal(data,i){
    const modal = document.createElement('div');
    modal.setAttribute('class','modal-container');
    modal.innerHTML =  `
     
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${data[i].picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${data[i].name.last}, ${data[i].name.first}</h3>
                <p class="modal-text">${data[i].email}</p>
                <p class="modal-text cap">${data[i].location.city}</p>
                <hr>
                <p class="modal-text">${data[i].phone}</p>
                <p class="modal-text">${data[i].location.street.number} ${data[i].location.street.name} , ${data[i].location.state} , ${data[i].location.postcode}</p>
                <p class="modal-text">Birthday: ${data[i].dob.date.substr(5,2)}-${data[i].dob.date.substr(8,2)}-${data[i].dob.date.substr(0,4)}
                </p>
            </div>
        </div>
    
    `;
    
    return modal;
    
}



// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

function modalClickHandler(data){
     const cards = document.querySelectorAll('.card');
    
    for(let i =0; i< cards.length; i++){
         cards[i].addEventListener('click', () => {
            body.appendChild(generateModal(data,i))
            closeModal();
            
       }) 
    }
    
}



//can also listen if generateModal function has been loaded
//listen for close click



//listen for outside click


function closeModal(){
    const modalContainer = document.getElementsByClassName('modal-container')[0];
    const closeBtn = document.getElementById("modal-close-btn");
    closeBtn.addEventListener('click', () =>{
        modalContainer.remove();
    });
}

//function to close modal if outside click
    window.addEventListener('click', () =>{
        const modalContainer = document.getElementsByClassName('modal-container')[0];

        if(event.target == modalContainer){
            modalContainer.remove();
        }
    });
     

