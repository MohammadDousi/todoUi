



let item2 = document.getElementById("item2");
item2.addEventListener("click", function () {


   item2.style.transform = "scale(1.2)";
   item2.style.background = "#fff";
   item2.style.borderRadius = "15px";
   item2.style.boxshadow = "0 2px 10px rgb(38 51 77 / 7%)";
   item2.style.fontWeight = "600";
   item2.style.color = "#3361FF";
})




// const new_notif = document.getElementById("alert-notif-header");
// const icon_notif = document.getElementById("ic-notif");
// const icon_notif_hover = document.getElementById("ic-notif-hover");

// new_notif.addEventListener("mouseenter", function () {
//    icon_notif.style.display = "none"
//    icon_notif_hover.style.display = "block"
// })
// new_notif.addEventListener("mouseleave", function () {
//    icon_notif.style.display = "block"
//    icon_notif_hover.style.display = "none"
// })




let show = document.querySelectorAll(".list-task-task");

show.forEach(element => {
   element.addEventListener("click", function () {

      var class_body = this.getElementsByClassName("list-task-body")[0];
      if (class_body.className.trim() == "list-task-body") {
         class_body.className += " show-list-task-body"
      } else {
         class_body.className = class_body.className.replace("show-list-task-body", "");
      }

   });
});





// check network connection 

let exit = document.getElementById("exit-btn");
exit.addEventListener("click", () => {
   window.location.href = "sign.html";
})



let li_bottom_border = document.querySelectorAll(".navbar-header-content-li");

li_bottom_border.forEach(element => {
   element.addEventListener("click", function () {

      var current = document.getElementsByClassName("li_active");
      current[0].className = current[0].className.replace(" li_active", "");
      this.className += " li_active";



      switch (element.id) {
         case "boards":
            document.querySelector(".content-board").style.display = "flex";
            document.querySelector(".content-list-task").style.display = "none";
         break;
         case "list-task":
            document.querySelector(".content-board").style.display = "none";
            document.querySelector(".content-list-task").style.display = "flex";
         break;
      }

   });
});





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











// cricle progress

let circle_progres = document.querySelector(".progress-circle"),
   circle_count = document.querySelector(".count-circle"),
   count = document.querySelector(".badge-count-profile"),

   all_task = 3, ok_task = 2, progressStartValue = 100, progressEndValue = 0, speed = 15;

all_task = 360 / all_task;
ok_task = all_task * ok_task;
progressEndValue = 360 - ok_task;

let progress = setInterval(() => {

   progressStartValue--;
   circle_progres.style.background = `conic-gradient(#fff ${progressStartValue * 3.6}deg , var(--blue) 0deg)`;
   circle_count.style.transform = `rotate(${progressStartValue * 3.6}deg)`;
   count.style.transform = `rotate(${progressStartValue * -3.6}deg)`;

   if (Math.floor(progressStartValue * 3.6) <= progressEndValue) {
      clearInterval(progress);
   }

}, speed);
