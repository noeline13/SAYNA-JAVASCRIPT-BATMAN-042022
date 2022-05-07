//menu
let menu = document.querySelectorAll(".nav .nav-item");
menu.forEach(men => {
    men.addEventListener("mouseover", () => {
        men.style.textDecoration = "underline";
        men.style.fontWeight = "800";
        men.style.color = "white";

    })
});

menu.forEach(men => {
    men.addEventListener("mouseout", () => {
        men.style.textDecoration = "none";
        men.style.fontWeight = "400";
        men.style.color = "white";
    })
});

//fade in  

//titre
let title = document.querySelectorAll(".h1")
for (let i = 0; i < title.length; i++) {
    title[i].classList.add("sliders")

}

//paragraphe
let para = document.querySelectorAll(".more")
for (let i = 0; i < para.length; i++) {
    para[i].classList.add("slidets")

}


//image

let image = document.querySelectorAll(".moves")
for (let i = 0; i < image.length; i++) {
    image[i].classList.add("slider")

}

//image
//social media

let social = document.querySelectorAll(".social")
social.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.style.transform = "scale(1.5)";
        icon.style.filter = "opacity(0.5) drop-shadow(0 0 0 yellow)";
    })
});

social.forEach(icon => {
    icon.addEventListener("mouseout", () => {
        icon.style.transform = "scale(1)";
        icon.style.filter = "brightness(1)";
    })
});

//image fleche et logo
let socials = document.querySelectorAll(".socials")
socials.forEach(icons => {
    icons.addEventListener("mouseover", () => {
        icons.style.filter = "opacity(0.4) drop-shadow(0 0 0 yellow)";
    })
});

socials.forEach(icons => {
    icons.addEventListener("mouseout", () => {
        icons.style.filter = "opacity(1) drop-shadow(0 0 0 yellow)";
    })
});

let button = document.querySelector("button");

button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
    button.style.color = "white"
})



button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
})