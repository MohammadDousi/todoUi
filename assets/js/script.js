


 const new_notif = document.getElementById("alert-notif-header");
 const icon_notif = document.getElementById("ic-notif");
 const icon_notif_hover = document.getElementById("ic-notif-hover");

 new_notif.addEventListener("mouseenter",function(){
    icon_notif.style.display = "none"
    icon_notif_hover.style.display = "block"
 })
 new_notif.addEventListener("mouseleave",function(){
    icon_notif.style.display = "block"
    icon_notif_hover.style.display = "none"
 })