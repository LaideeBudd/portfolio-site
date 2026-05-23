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



  const form = document.getElementById("contact-form");
const submit = document.getElementById("contact-submit");
const status = document.getElementById("form-status");

submit.addEventListener("click", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  formData.append("access_key", "5fb1f410-ac33-4bbd-aa12-a92bd1fe9185");

  status.textContent = "Sending...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      status.textContent = "Message sent successfully.";
      form.reset();
    } else {
      status.textContent = "Something went wrong.";
    }
  } catch (error) {
    status.textContent = "Something went wrong.";
  }
});

