const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

//Button event handler

darkButton.onclick = () => {
    body.classList.replace('light', 'dark')
}

lightButton.onclick = () => {
    body.classList.replace('dark', 'light')
}