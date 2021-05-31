const contact = document.querySelector("#contact_name");
const number = document.querySelector("#contact_number");
const address = document.querySelector("#contact_address");
const btnAddTask = document.querySelector(".book__btn");
const contactList = document.querySelector(".contact__list");

const local = window.localStorage;

btnAddTask.onclick = () => {
  let contact_obj = {
    id: Math.random(1, 100),
    contact: contact.value,
    number: number.value,
    address: address.value,
  };
  storeContact(local, contact_obj);
};

loadContact(local, contactList);
