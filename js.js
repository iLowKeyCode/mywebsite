function myFunction() {
  const email = "edilemir@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
      const button = document.querySelector(".email .copyLabel");
      button.textContent = "Copied!";
      setTimeout(() => {
          button.textContent = "Copy Email";
      }, 5000);
  })
}
