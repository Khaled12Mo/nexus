const user_name = document.querySelector(".user-name"); 
window.addEventListener('DOMContentLoaded', () => {
    const userData = localStorage.getItem("userData"); 
    if(userData) { 
        const user = JSON.parse(userData); 
        user_name.textContent = user.name; 
    } else { 
        console.log("fail");
    }
});