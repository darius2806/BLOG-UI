function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("menu-icon");

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
    const messageInput = document.querySelectorAll('#message')[index]; 
    const message = messageInput.value;
    const submitDiv = document.querySelectorAll('#submit')[index]; 
    if (message.trim() !== '') {
      const p = document.createElement('p');
      p.className = 'mt-2 text-start break-words';
      p.textContent = message;
      submitDiv.appendChild(p);
      messageInput.value = ''; 
    }
  });
});