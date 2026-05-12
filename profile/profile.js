const user_name = document.querySelector(".user-name");
const themeBtn = document.getElementById("themeBtn");

window.onload = () => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    const user = JSON.parse(userData);
    user_name.textContent = user.name;
  } else {
    console.log("There's Error in Naming User");
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      themeBtn.textContent = document.body.classList.contains("light")
        ? "☀️"
        : "🌙";
    });
  }
};
