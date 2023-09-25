const moon = document.querySelector(".moon");
const moon2 = document.querySelector(".moon_2");
const moon3 = document.querySelector(".moon_3")

function mentionMoon() {
    setTimeout(() => {
        moon.style.display = "none";
        moon2.style.display = "";
    }, 3000);

    setTimeout(() => {
        moon2.style.display = "none";
        moon3.style.display = "";
    }, 4500);

    setTimeout(()=>{
        window.location.href = "card.html"
    }, 6000)
}
window.onload = () =>{
    mentionMoon()
}