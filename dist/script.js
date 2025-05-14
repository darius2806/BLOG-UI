function menuHam(e) {
  const menuIcon = document.getElementById("menu-icon");
  e.name = e.name === "menu-outline" ? "close-outline" : "menu-outline";
  menuIcon.name =
    menuIcon.name === "menu-outline" ? "close-outline" : "menu-outline";

  const navMenu = document.getElementById("menu");
  navMenu.classList.toggle("top-[9%]");
  navMenu.classList.toggle("top-[-100%]");
}
