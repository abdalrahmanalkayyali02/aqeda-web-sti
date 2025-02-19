let logo = document.querySelector(".logo")
let logoPop= document.querySelector(".logoPop")

logo.addEventListener("click", function(){
    logoPop.style.display="flex"
    document.body.style.overflow = "hidden"; // Disable scrolling
})

logoPop.addEventListener("click", function(event){
    event.stopPropagation(); // Prevent the event from bubbling up
    logoPop.style.display="none"
    document.body.style.overflow = "auto"; // Disable scrolling
})