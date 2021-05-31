const storeContact = (local, contact_obj) => {
  local.setItem(contact_obj.id, JSON.stringify(contact_obj));
  window.location.href = "/"; // to refresh the window
};

const loadContact = (local, parentNode) => {
  let keys = Object.keys(local);
  for (key of keys) {
    let contact = JSON.parse(local.getItem(key));
    createContacts(parentNode, contact, local);
  }
};

const createContacts = (parentNode, contact, local) => {
  let divContact = document.createElement("div");
  let nameContact = document.createElement("p");
  let numberContact = document.createElement("p");
  let addressContact = document.createElement("p");
  let iconDelete = document.createElement("span");

  nameContact.innerHTML = contact.contact;
  numberContact.innerHTML = contact.number;
  addressContact.innerHTML = contact.address;
  iconDelete.innerHTML = " ";

  divContact.classList.add("contact__records");
  iconDelete.classList.add("fas", "fa-times");

  iconDelete.onclick = () => {
    local.removeItem(contact.id);
    window.location.href = "/";
  };

  divContact.appendChild(nameContact);
  divContact.appendChild(numberContact);
  divContact.appendChild(addressContact);
  divContact.appendChild(iconDelete);

  parentNode.appendChild(divContact);
};
