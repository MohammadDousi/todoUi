

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







// check network connection 

function ShowPass() {
   var eye = document.getElementById("eye-pass");
   var pass = document.getElementById("pass");
   eye.onclick = function () {
     if (pass.type === "text") {
       pass.type = "password";
       eye.style.color = "#ADB8CC";
     } else {
       pass.type = "text";
       eye.style.color = "#E62E7B";
     }
   };
 }



