window.onload = function () {
  if (localStorage.mode != null) {
    if (localStorage.mode === "light") {
      document.body.classList.add("light");
    } else {
      localStorage.setItem("mode", "dark");
    }
  }
};

function light() {
  if (localStorage.mode === "light") {
    body.classList.remove("light");
    localStorage.setItem("mode", "dark");
    mode.textContent = '🌙'
  } else {
    body.classList.add("light");
    localStorage.setItem("mode", "light");
    mode.textContent = '☀️'; 
  }
}