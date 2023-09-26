const moon = document.querySelector(".moon");
const moon2 = document.querySelector(".text_1");
const moon3 = document.querySelector(".intoon_logo")

function mentionMoon() {
    setTimeout(() => {
        moon2.style.display = "";
    }, 3000);

    setTimeout(() => {
        moon3.style.display = "";
    }, 4500);

    setTimeout(()=>{
        moon.classList.add("fade-out")
        window.location.href = "moon.html"
    }, 6000)
}
window.onload = () =>{
    mentionMoon()
}