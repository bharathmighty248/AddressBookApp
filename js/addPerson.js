var personIndex;

window.addEventListener("DOMContentLoaded", (event) => {

    const name = document.querySelector('#name');
    const textError = document.querySelector('.name-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new Person()).name = name.value;;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    if (addressBookList != undefined) {
        personIndex = new URLSearchParams(window.location.search).get("index");
        const contactList = getAddressBookDataFromStorage(parseInt(personIndex));
        if (contactList) {
            setRecords(contactList);
        }
    }

});

const save = () => {
    try {
        let addressBookData = createAddressBook();
        createAndUpdateStorage(addressBookData);
    } catch (e) {
        return;
    }
}

const createAddressBook = () => {
    let addressBook = new Person();
    try {
        addressBook.name = getInputValueById("#name");
    } catch (e) {
        setTextValue(".name-error", e);
        throw e;
    }
    addressBook.phoneNumber = getInputValueById('#phone-number');
    addressBook.address = getInputValueById('#address');
    addressBook.city = getInputValueById('#city');
    addressBook.state = getInputValueById('#state');
    addressBook.zipCode = getInputValueById('#zip-code')
    alert(addressBook.toString());
    return addressBook;
}

function createAndUpdateStorage(addressBookData) {
    let addressBookList = JSON.parse(localStorage.getItem("addressBookList"));

    const index = new URLSearchParams(window.location.search).get("index");
    if (index == null || parseInt(index) < 0) {
        if (addressBookList != undefined) {
            addressBookList.push(addressBookData);
        } else {
            addressBookList = [addressBookData];
        }
    } else {
        addressBookList[parseInt(index)] = addressBookData;
    }
    alert(addressBookList.toString());
    localStorage.setItem("addressBookList", JSON.stringify(addressBookList));
}

const getAddressBookDataFromStorage = (index) => {
    return localStorage.getItem('addressBookList') ?
        JSON.parse(localStorage.getItem('addressBookList'))[index] : [];
};

const setRecords = (contactList) => {
    setValue("#name", contactList._name);
    setValue('#phone-number', contactList._phoneNumber);
    setValue('#address', contactList._address);
    setValue('#city', contactList._city);
    setValue('#state', contactList._state);
    setValue('#zip-code', contactList._zipCode);
};



const resetForm = () => {
    setValue("#name", "")
    setValue("#phone-number", "");
    setValue("#address", "");
    setValue("#city", "");
    setValue("#state", "");
    setValue("#zip-code", "");
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}



// const getSelectedValues = (propertyValue) => {
//     let allItems = document.querySelectorAll(propertyValue);
//     let selItems = [];
//     allItems.forEach(item => {
//         if (item.checked) {
//             selItems.push(item.value);
//         }
//     });
//     return selItems;
// };

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
};

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
};