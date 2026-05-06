const navItems = document.getElementById("nav-items");

const navContainer = document.getElementById("nav-container");

const menuButton = document.getElementById("hamburger");


const menuToggle = () => {
    if (navItems.style.display === "none"){
        navItems.style.display = "flex";
        navContainer.style.height = "50vh";
        menuButton.innerHTML = "&#x2715;";

        console.log("test")
    }

    else {
        navItems.style.display = "none";
        navContainer.style.height = "5rem";
        menuButton.innerHTML = "&#9776;";
    }
}

const navFlex = () => {
    if (document.body.clientWidth > 768) {
      navItems.style.display = "flex";

      console.log("test");
    } else {
      navItems.style.display = "none";

    }
  };

  window.onresize = navFlex;

