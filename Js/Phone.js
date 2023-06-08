const loadData = () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoadData(data.data));
}


const displayLoadData = (phoneInfo) => {
    console.log(phoneInfo);
    const phoneContainer = document.getElementById('phoneContainer')

    phoneInfo.forEach(phone => {
        const divCreate = document.createElement('div')
        divCreate.classList.add('col')
        divCreate.innerHTML = `
        
                      <div class="card h-50">
                        <img src="${phone.image}" class="card-img-top " alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">${phone.slug}</p>
                        </div>
        
        `;
        phoneContainer.appendChild(divCreate);

    });



}
loadData();