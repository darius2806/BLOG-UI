function toggleMenu() {
  let menu = document.getElementById("mobile-menu");
  let icon = document.getElementById("menu-icon");

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    icon.setAttribute("name", "close-outline");
  } else {
    menu.classList.add("hidden");
    icon.setAttribute("name", "menu-outline");
  }
};


document.querySelectorAll('#button').forEach((button, index) => {
  button.addEventListener('click', function () {
    let messageInput = document.querySelectorAll('#message')[index]; 
    let message = messageInput.value;
    let submitDiv = document.querySelectorAll('#submit')[index]; 
    if (message.trim() !== '') {
      let p = document.createElement('p');
      p.className = 'mt-2 text-start break-words';
      p.textContent = message;
      submitDiv.appendChild(p);
      messageInput.value = ''; 
    }
  });
});