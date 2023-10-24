function navbar() {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-bar").innerHTML = data;
    });
}
