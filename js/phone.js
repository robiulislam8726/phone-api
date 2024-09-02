const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    console.log (phones);
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    // console.log (phone)
    const phoneContainer = document.getElementById('phone-container');
    // clear phone container cards before adding new cards
    phoneContainer.textContent= '';

    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden')
    }
    else {
        showAllContainer.classList.add('hidden');
    }
    // console.log('is show all', isShowAll)
    // Display first 12 phone if not show all
    if(!isShowAll){
        phones = phones.slice(0,12);
    }

    phones.forEach(phone => {
        // console.log(phone);
        //2 create a div
        const phoneCard = document.createElement ('div');
        phoneCard.classList =`card bg-gray-100 p-4 shadow-xl`;

        //3 set inner HTML
        phoneCard.innerHTML =`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.
                phone_name}</h2>
            <p>show your phone</p>
            <div class="card-actions justify-center">
            <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>
         `;
        // 4 append child
        phoneContainer.appendChild(phoneCard);
    });
    // hide loading spinner 
    toggleLoadingSpinner(false);
}
const handleShowDetail = async (id) => {
    // console.log('click show details', id)
    // load single phone data
    const res = await fetch (`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await res.json();
    const phone = data.data;
    showPhoneDetails(phone)

}

const showPhoneDetails = (phone) =>{
    console.log(phone);
    const phoneName = document.getElementById('show-details-phone-name');
    phoneName.innerText= phone.name;
    const showDetailContainer = document.getElementById('show-detail-container');
    showDetailContainer.innerHTML=`
        <img src ="${phone.image}" alt=""/>
        <p><span> Storage: </span>${phone?.
            mainFeatures?.storage}</p>
        <p><span> Memory: </span>${phone?.
            mainFeatures?.memory }</p>
        <p><span> Sensor: </span>${phone?.
            mainFeatures?.sensors }</p>
        <p><span> ReleaseDate: </span>${phone?.
            releaseDate}</p>


            
            
    
    `
    // show the modal
    show_details_modal.showModal();
}



// handle search button
    const handleSearch =(isShowAll) => {
    toggleLoadingSpinner (true);
    // console.log('search handle')
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);
    }


    const toggleLoadingSpinner = (isLoading) => {
        const loadingSpinner = document.getElementById('loading-spinner');
        if(isLoading){
            loadingSpinner.classList.remove('hidden')
        }
        else{
            loadingSpinner.classList.add('hidden')
        }
    }

    // handle show all button
    const handleShowAll = () => {
        handleSearch(true);
    }
loadPhone();