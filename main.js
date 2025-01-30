document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

const targetId = this.getAttribute("href").substring(1);
const targetElement =document.getElementById(targetId);

window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth"
});

    });
});

const projectImages = document.querySelectorAll(".project img");
projectImages.forEach(image =>{
image.addEventListener("mouseover", ()=> {
    image.style.transform = 'scale(1.05)'; // just a slight zoom on hover
    image.style.transition = 'transform 0.3s ease'; // smooth transition
});

image.addEventListener("mouseout", () =>{
    image.style.transform = "scale(1)"; // instruction to reset on mouse out
})

});