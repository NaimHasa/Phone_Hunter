const loadData = (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoadData(data.data));
}


const displayLoadData = (phoneInfo) => {

    //spacifick data showing work.........

    // phoneInfo = phoneInfo.slice(0, 10);
    // console.log(phoneInfo);

    const phoneContainer = document.getElementById('phoneContainer')

    phoneContainer.innerHTML = ``;

    const noPhoneFound = document.getElementById('noFound');

    if (phoneInfo.length === 0) {
        noPhoneFound.classList.remove('d-none');

    }
    else {
        noPhoneFound.classList.add('d-none');
    }

    phoneInfo.forEach(phone => {

        const divCreate = document.createElement('div')
        divCreate.classList.add('col')
        divCreate.innerHTML = `
        
                      <div class="card h-80">
                        <img src="${phone.image}" class="card-img-top p-5" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">${phone.slug}</p>
                        </div>
        
        `;
        phoneContainer.appendChild(divCreate);


    });


    // loader end point
    toggleSpinner(false);

}

const searchBtn = () => {
    toggleSpinner(true);
    //loader start point
    const inputFiled = document.getElementById('inputTextFiled')
    const inputFiledText = inputFiled.value;
    loadData(inputFiledText);

    inputFiled.value = '';

};
const toggleSpinner = isLoding => {
    const loaderSection = document.getElementById('loader');

    if (isLoding) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }

}





// loadData();