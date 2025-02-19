

// let logo = document.querySelector(".logo")
// let logoPop= document.querySelector(".logoPop")

// logo.addEventListener("click", function(){
//     logoPop.style.display="flex"
//     document.body.style.overflow = "hidden"; // Disable scrolling
// })

// logoPop.addEventListener("click", function(event){
//     event.stopPropagation(); // Prevent the event from bubbling up
//     logoPop.style.display="none"
//     document.body.style.overflow = "auto"; // Disable scrolling
// })


let ham= document.querySelector(".ham")
let menu= document.querySelector(".menu")
let closeHam= document.getElementById("closeHam")

ham.addEventListener("click" ,function(){
    menu.style.display="flex"
})
closeHam.addEventListener("click" ,function(event){
    event.stopPropagation(); // Prevent the event from bubbling up
    menu.style.display = "none";
})

let newsletter= document.querySelector(".newsletter")
let form= document.querySelector(".formCont")

newsletter.addEventListener("click", function(){
    form.style.display="flex"
    
    setTimeout(() => {
        const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0; // Get navbar height
        const margin = 0; // Adjust margin as needed
    
        if (form) {
            const elementRect = form.getBoundingClientRect();
            const absoluteY = window.scrollY + elementRect.top;
            const viewportHeight = window.innerHeight;
    
            window.scrollTo({
                top: absoluteY - navbarHeight - margin - (viewportHeight / 2) + (elementRect.height / 2), 
                behavior: "smooth"
            });
        }
    }, 100);
})

