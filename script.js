// Initialize an empty array to store contacts
let contacts = [];

// Function to render the contact list
function renderContactList() {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";

  contacts.forEach((contact) => {
    const li = document.createElement("li");
    li.textContent = `${contact.name}: ${contact.contact}`;
    contactList.appendChild(li);
  });
}

// Function to handle form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;

    if (name && contact) {
      contacts.push({ name, contact });
      renderContactList();

      // Clear the form
      document.getElementById("contactForm").reset();
    }
  });
