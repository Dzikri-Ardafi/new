const sidebar = document.getElementById("sidebar");

const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener("click", (event) => {
      this._toogleDrawer(event, drawer);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toogleDrawer(event, drawer) {
    sidebar.style.display = "block";
    drawer.classList.toggle("open");
    event.stopPropagation();
  },

  _closeDrawer(event, drawer) {
    sidebar.style.display = "none";
    event.stopPropagation();
    drawer.classList.remove("open");
  },
};

export default DrawerInitiator;
