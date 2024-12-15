const ourSweets = [
    {
        id: "1",
        image: "img/sweets-page/wedding-cakes.jfif",
        name: "Wedding cake.",
        heading: "Wedding cakes"
    },
    {
        id: "2",
        image: "img/sweets-page/birthday-cakes.jfif",
        name: "Birthday cake.",
        heading: "Birthday cakes"
    },
    {
        id: "3",
        image: "img/sweets-page/cupcakes.jfif",
        name: "Cupcake.",
        heading: "Cupcakes"
    },
    {
        id: "4",
        image: "img/sweets-page/chesecakes.jfif",
        name: "Cheesecake.",
        heading: "Cheesecakes"
    },
    {
        id: "5",
        image: "img/sweets-page/candy-bar.jfif",
        name: "Candy bar.",
        heading: "Candy bar"
    },
    {
        id: "6",
        image: "img/sweets-page/other-occasions.jfif",
        name: "Other occasions.",
        heading: "Other occasions"
    }
];

renderOurSweets(ourSweets);

function renderOurSweets(ourSweets) {
    let ourSweetsDomStr = '';
    for (const ourSweet of ourSweets) {
        ourSweetsDomStr += `
        <article class="sweets__item">
            <div class="sweets__image-container">
                 <img class="sweets__image" src="${ourSweet.image}" alt="${ourSweet.name}">
            </div>
            <div class="sweets__item-content">
                <h3 class="sweets__heading">${ourSweet.heading}</h3>
                <a class="sweets__link" href="sweets-page.html">See all</a>
            </div>
        </article>
        `;
    }
    const ourSweetsContainer = document.querySelector('.sweets__our-sweets-list');
    ourSweetsContainer.innerHTML = ourSweetsDomStr;
}