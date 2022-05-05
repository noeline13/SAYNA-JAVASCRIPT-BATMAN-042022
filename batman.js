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
let title = document.querySelectorAll("h1")
for (let i = 0; i < title.length; i++) {
    title[i].classList.add("sliders")

}

let para = document.querySelectorAll("p")
for (let i = 0; i < para.length; i++) {
    para[i].classList.add("sliders")

}


let image = document.querySelectorAll("img")
for (let i = 0; i < image.length; i++) {
    image[i].classList.add("slider")

}
/*card*/
/*Les images des trois héros Spiderman doivent zoomer légèrement et individuellement
au passage de la souris */
let all_card = document.querySelectorAll(".card")


all_card.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.2)";
        card.style.marginTop = "4%";
        card.querySelector(".cardy").style.display = "block";
    })
});

all_card.forEach(card => {
    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
        card.style.marginTop = "0%";
        card.querySelector(".cardy").style.display = "none";
    })
});

/*button slider
let previous = document.querySelector("#pre");
let next = document.querySelector("#next");
let track_image = document.querySelector("#track_image");
let timer;
let index_no = 0;

// creation de l'image
let track = document.createElement("imsge");
// tous les slider
let all_slider = [{

        img: "Assets/illustrations/Home/Batslider1.png"
    },
    {
        img: "Assets/illustrations/Home/Batslider2.png"
    }, {
        img: "Assets/illustrations/Home/Batslider3.png"
    },
    {
        img: "Assets/illustrations/Home/Batslider4.png"
    },
    {
        img: "Assets/illustrations/Home/Batslider5.png"
    },
    {
        img: "Assets/illustrations/Home/Batslider6.png"
    },
    {
        img: "Assets/illustrations/Home/Batslider7.png"
    },
    {
        img: "Assets/illustrations/Home/Batslider8.png"
    },
    {
        img: "Assets/illustrations/Home/Batslider9.png"
    },

];

function load_track(index_no) {
    track_image.src = all_slider[index_no].img;
    track.load();
    timer = setInterval(range_slider, 1000);

}
load_track(index_no);

// next 
function nextSong() {
    if (index_no < all_slider.length - 1) {
        index_no += 1;
        load_track(index_no);
        playSong();
    } else {
        index_no = 0;
        load_track(index_no);
        playSong();
    }
};

// previous 
function previousSong() {
    if (index_no > 0) {
        index_no -= 1;
        load_track(index_no);
        playSong();
    } else {
        index_no = all_slider.length;
        load_track(index_no);
        playSong();
    }
*/