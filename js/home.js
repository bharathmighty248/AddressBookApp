let addressBookList;
window.addEventListener('DOMContentLoaded', (event) => {
    addressBookList = getAddressBookDataFromStorage();
    document.querySelector(".emp-count").textContent = addressBookList.length;
    createInnerHtml();
});

const getAddressBookDataFromStorage = () => {
    return localStorage.getItem('addressBookList') ? JSON.parse(localStorage.getItem('addressBookList')) : [];
} 

const createInnerHtml = () => {
    const headerHtml = "<th>Full Name</th><th>Address</th><th>City</th><th>State</th><th>Zip Code</th><th>Phone Number</th><th>Actions</th>";
    if (addressBookList.length == 0) {
        return;
    }
    let innerHtml = `${headerHtml}`;
    for (const contact of addressBookList) {
        innerHtml = `${innerHtml}
            <tr>
                <td>${contact._name}</td>
                <td>${contact._address}</td>
                <td>${contact._city}</td>
                <td>${contact._state}</td>
                <td>${contact._zipCode}</td>
                <td>${contact._phoneNumber}</td>
                <td>
                    <img id="${contact._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
                    <img id="${contact._id}" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const remove = (node) => {
    addressBookList.splice(parseInt(node.id), 1);
    localStorage.setItem("addressBookList", JSON.stringify(addressBookList));
    createInnerHtml();
}

const update = (node) => {
    const currentUri = window.location.href;
    const addUri = currentUri.replace("home", "addPerson");
    window.location.replace(addUri + "?index=" + node.id);
}