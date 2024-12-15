const popularCakes = [
    {
        id: "1",
        image: "img/sweets-page/milky-fantasy.png",
        name: "Milky fantasy cake.",
        heading: "Milky Fantasy",
        price: "$40/kg"
    },
    {
        id: "2",
        image: "img/sweets-page/mint-wind.jfif",
        name: "Mint wind cake",
        heading: "Mint Wind",
        price: "$35/kg"
    },
    {
        id: "3",
        image: "img/sweets-page/wild-berry.jfif",
        name: "Wild berry cake",
        heading: "Wild Berry",
        price: "$45/kg"
    }
];

renderPopularCakes(popularCakes);

function renderPopularCakes(popularCakes) {
    let popularCakesDomStr = '';
    for (const cake of popularCakes) {
        popularCakesDomStr += `
            <article class="sweets__item">
                <div class="sweets__image-container">
                    <img class="sweets__image" src="${cake.image}" alt="${cake.name}">
                </div>
                <div class="sweets__item-content">
                    <h3 class="sweets__heading">${cake.heading}</h3>
                    <p class="sweets__price">${cake.price}</p>
                </div>
            </article>
        `;
    }
    const popularCakesContainer = document.querySelector('.sweets__popular-cakes-list');
    popularCakesContainer.innerHTML = popularCakesDomStr;
}