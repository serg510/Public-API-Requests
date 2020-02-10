const card = document.querySelector('.card');

fetch('https://randomuser.me/api/?results=12&inc=name,location,email,picture&nat=us')
    .then(response => response.json())
    .then(data => generateCard(data))
    //.then(data => console.log(data.results))

    
function generateCard(data){
    employee = data.results[0]
    const html= `<div class="card">
    <div class="card-img-container">
        <img class="card-img" src="${employee.picture.large}" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">${employee.name.last}, ${employee.name.first}</h3>
        <p class="card-text">${employee.email}</p>
        <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
    </div>
</div>`;
gallery.innerHTML = html;
console.log(data.results)
}