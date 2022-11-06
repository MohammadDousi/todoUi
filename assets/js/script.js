






function seleced_grid(){
   let select = document.querySelectorAll(".menu-grid div");

   for(let i=0; i < select.length;i++){
      console.log(i);
      select[i].style.background = "#000000";
   }
}



   // : 10px;
   //  transform: scale(1.2);
   //  transition: .3s;
   //  background: #fff;
   //  box-shadow: 0 2px 10px rgb(38 51 77 / 7%);
   //  cursor: pointer;
   //  font-weight: 600;


let circle_progres = document.querySelector(".progress-circle"),
   all_task = 3 , ok_task = 2 , progressStartValue = 100, progressEndValue = 0, speed = 15;

   all_task = 360 / all_task ;
   ok_task = all_task * ok_task ;
   progressEndValue = 360 - ok_task ;

let progress = setInterval(()=>{

   progressStartValue--;

   circle_progres.style.background = `conic-gradient(#fff ${progressStartValue * 3.6}deg , var(--blue) 0deg)`;

   if(Math.floor(progressStartValue * 3.6) <= progressEndValue){
      console.log(Math.floor(progressStartValue * 3.6));
      clearInterval(progress);
   }

   // progressStartValue--;
   // circle_progres.style.background = `conic-gradient(#fff ${progressStartValue * 3.6}deg , var(--blue) 0deg)`;
   // if(progressStartValue == progressEndValue){
   //    clearInterval(progress);
   // }

},speed);




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