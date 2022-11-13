

// check network connection 

let check = document.getElementById("checknet");

if (window.navigator.onLine) { setOnline(); } else { setOffline(); }

window.addEventListener('online', () => {
   setOnline();
})
window.addEventListener('offline', () => {
   setOffline();
})

function setOnline() {
   check.style.display = "none";
}

function setOffline() {
   check.style.display = "block";
}




