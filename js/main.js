// target the inputs, btn & list where will be placed the records
const contact = document.querySelector("#contact_name");
const number = document.querySelector("#contact_number");
const address = document.querySelector("#contact_address");
const btnAddRecord = document.querySelector(".book__btn");
const contactList = document.querySelector(".contact__list");
const message = document.querySelector(".book_initial_msg");

// target the localStorage
const local = window.localStorage;

if (Object.keys(local).length > 0) {
  message.classList.add("hidden");
}

// function to getting record data as an object and sending to Local storage
btnAddRecord.onclick = () => {
  let record_obj = {
    id: Math.random(1, 100),
    contact: contact.value,
    number: number.value,
    address: address.value,
  };
  storeRecord(local, record_obj);
};

// call to display the records saved in the local storage
loadRecord(local, contactList);
