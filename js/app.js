// i wont normally leave comments but here you go

// arrays of object and a normal array
const galleryIt = [
  {
    id: 1,
    title: `Bake potato pizza`,
    price: 20.5,
    img: `../Assets/gallery_9.jpeg`,
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed. `
  },
  {
    id: 2,
    title: `Salted Fried Chicken`,
    price: 19.0,
    img: `../Assets/gallery_8.jpeg`,
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
  },
  {
    id: 3,
    title: `Italian sause mushroom`,
    price: 17.99,
    img: `../Assets/gallery_7.jpeg`,
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
  },
  {
    id: 4,
    title: `deluxe burger with fries`,
    price: 22.5,
    img: `../Assets/gallery_6.jpeg`,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
  }
];
const facts = [
  "If you give up due to what others say, you should'nt have started in the first place",
  "If you L❤V colors, become a game developer",
  "Everyone has their own paths in Life",
  "Nothing is hard, just need the right mindset",
  "If you tired of thinking go to sleep, dont stress your brain",
  "I'm proud i went to sabi-tech",
  "Jade Emperor into the web 'keep fighting'",
  "An Octopus has three hearts",
  "STRIVE FOR PROGRESS NOT PERFECTION "
];

// querying the dom/getting the attributes from the html
const preloader = document.querySelector(".preloader");
const btn = document.querySelector("#btn");
const hero = document.querySelector("#hero");
const connect = document.querySelector(".connect");
const fact = document.getElementById("facts");
const moreInfo = document.querySelectorAll("#moreInfo");

// a load event is an event that signifies when the html is parsed
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
// a toggle event for the small screen sizes

// for when all the document(html, css, js) has been parsed and loaded
window.addEventListener("DOMContentLoaded", function () {
  displayGalleryItems(galleryIt);
  cardHoverEffect();
  randomNumberInterval();
  toggle();
  infoToggler();
});

// mapping the items to create a new array which i then inject into the gallery-section
// the map method creates an array for each object in the array of object called galleryIt
// arrow function used here
const displayGalleryItems = (galleryItems) => {
  let displayGallery = galleryItems
    .map((item) => {
      return `
    <div class="card card-1 img-centering" style="background-image: url(${item.img});">
    <div class="card-content card">
    <h4 class="fs-500 light align ff-serif capitalize">${item.title}</h4>
    <p class="white fs-400 capitalize paddingY-2 ff-sans-cond gold">Price: $${item.price}</p>
    <p class="white align ff-sans-normal">${item.desc}</p>
    </div>
    </div>`;
    })
    .join("");
  connect.innerHTML = displayGallery;
};
function toggle() {
  btn.addEventListener("click", () => {
    const style = hero.classList;

    style.toggle("active");
    const rotate = btn.classList;
    if (!rotate.contains("turn")) {
      rotate.add("turn");
    } else {
      rotate.remove("turn");
    }
  });
}
const cardHoverEffect = () => {
  const cards = connect.querySelectorAll(".card-1");
  cards.forEach(function (card) {
    const content = card.querySelector(".card-content");
    content.style.display = "none";

    card.addEventListener("mouseenter", () => {
      content.style.display = "block";
    });

    card.addEventListener("mouseleave", () => {
      content.style.display = "none";
    });
  });
};
const randomNumberInterval = () => {
  return new Promise(() => {
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * facts.length);
      fact.textContent = facts[randomNumber];
    }, 5900);
  });
};

const infoToggler = () => {
  moreInfo.forEach((info) => {
    const btn = info.querySelector(".show-text");
    btn.addEventListener("click", () => {
      moreInfo.forEach(($info) => {
        if ($info !== info) {
          $info.classList.remove("show-output");
        }
        info.classList.toggle("show-output");
      });
    });
  });
};

let audio = new Audio(
  "../audio/Somebody_that_i_use_to_know_Gotye_Ft_Kimbra_Naijapals.mp3"
);
audio.autoplay = true;
audio.loop = true;
