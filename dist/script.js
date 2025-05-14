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
}
