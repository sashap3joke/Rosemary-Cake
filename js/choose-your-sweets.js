const chooseYourSweets = [
    {
        id: "1",
        image: "img/choose-your-sweets-card-wedding-cakes.png",
        name: "Wedding Cakes"
    },
    {
        id: "2",
        image: "img/choose-your-sweets-birthday-cakes.png",
        name: "Birthday Cakes"
    },
    {
        id: "3",
        image: "img/choose-your-sweets-cupcakes.png",
        name: "Cupcakes"
    },
    {
        id: "4",
        image: "img/choose-your-sweets-cheesecake.png",
        name: "Cheesecakes"
    },
    {
        id: "5",
        image: "img/choose-your-sweets-candy-bar.png",
        name: "Candy Bar"
    },
    {
        id: "6",
        image: "img/choose-your-sweets-cakes.png",
        name: "Other occasions"
    }
];

renderChooseYourSweets(chooseYourSweets);

function renderChooseYourSweets(chooseYourSweets) {
    let chooseYourSweetsDomString = '';
    for(const chooseYourSweet of chooseYourSweets) {
        chooseYourSweetsDomString += `
        <div class="choose-your-sweets__card card">
            <img class="card__image" src="${chooseYourSweet.image}" alt="${chooseYourSweet.name}">
            <h3 class="card__title">${chooseYourSweet.name}</h3>
            <a class="card__link" href="sweets.html">See all</a>
        </div>
        `;
    }
    const chooseYourSweetsContainer = document.querySelector('.choose-your-sweets__cards');
    chooseYourSweetsContainer.innerHTML = chooseYourSweetsDomString;
}