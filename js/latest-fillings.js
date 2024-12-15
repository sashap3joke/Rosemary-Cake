const latestFillings = [
    {
        id: "1",
        image: "img/ultimate-crazy-cake.png",
        name: "Ultimate Crazy Cake",
        price: "$20/kg",
        description: "This classic American cake appeared during the Great Depression. It is perfect for vegans, as there are no eggs or milk ! Why is it so delicious then? This is our secret!"
    },
    {
        id: "2",
        image: "img/schwarzwald-cake.png",
        name: "Schwarzwald",
        price: "$25/kg",
        description: "Schwarzwald or Black Forest is one of the most popular cakes in all families around the world. It is a real classic, with multiple layers, whipped cream and cherries."
    },
    {
        id: "3",
        image: "img/tiramisu-cake.png",
        name: "Tiramisu",
        price: "$30/kg",
        description: "Italian multi-layered dessert, which is made of mascarpone cheese, coffee, chicken eggs, sugar and Savoyardi cookies. Belissimo!"
    }
];

renderLatestFillings(latestFillings);

function renderLatestFillings(cakeFillings) {
    let latestFillingsDomString = '';
    for(const latestFilling of latestFillings) {
        latestFillingsDomString += `
        <article class="latest-fillings__card card">
            <img class="card__image" src="${latestFilling.image}" alt="${latestFilling.name}">
            <h3 class="card__title">${latestFilling.name}</h3>
            <p class="card__price">${latestFilling.price}</p> 
            <p class="card__description">${latestFilling.description}</p>
        </article>
        `;
    }
    const latestFillingsContainer = document.querySelector('.latest-fillings__cards');
    latestFillingsContainer.innerHTML = latestFillingsDomString;
}