const card = document.querySelector('.card');

fetch('https://randomuser.me/api/?results=12&inc=name,location,email,picture&nat=us')
    .then(response => response.json())
    .then(data => generateCard(data))
    //.then(data => console.log(data.results))

    
function generateCard(data){
    let employee = data.results;
    //console.log(employee)

    const html= employee.map( person => {

    return `<div class="card">
    <div class="card-img-container">
        <img class="card-img" src="${person.picture.large}" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">${person.name.last}, ${person.name.first}</h3>
        <p class="card-text">${person.email}</p>
        <p class="card-text cap">${person.location.city}, ${person.location.state}</p>
    </div>
</div>`}).join('');
gallery.innerHTML = html;
//console.log(data.results)
}