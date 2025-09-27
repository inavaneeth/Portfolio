let darkmode = localStorage.getItem('darkmode');
const toggleMode = document.getElementById('toggleMode');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', "active");
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}
if (darkmode === "active") {
    enableDarkMode();
}

toggleMode.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    if (darkmode !== "active") {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
});