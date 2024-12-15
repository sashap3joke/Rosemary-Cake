const cakeFillings = [
    {
        id: "1",
        image: "img/vanilla-cake.png",
        name: "Vanilla Tenderness",
        price: "$20/kg",
        description: "Sweet and mouth-filling vanilla biscuits covered with sour cream, custard cream and delicate nut syrup."
    },
    {
        id: "2",
        image: "img/strawberry-cake.png",
        name: "Strawberry Summer",
        price: "$25/kg",
        description: "Wet vanilla biscuits with strawberry pieces soaked with strawberry juice, layers are covered with strawberry-basil cheese cream."
    },
    {
        id: "3",
        image: "img/pistachio-cake.png",
        name: "Pistachio Queen",
        price: "$30/kg",
        description: "Airy biscuits soaked in rum syrup, delicate pistachio and vanilla cream with milk-chocolate sauce."
    },
    {
        id: "4",
        image: "img/red-velvet-cake.png",
        name: "Red Velvet",
        price: "$35/kg",
        description: "Mysterious. Passionate. Even demonic. Snow-white outside and bright red inside. It's all about this classic American cake with biscuit layers and sour cream."
    },
    {
        id: "5",
        image: "img/berry-madness-cake.png",
        name: "Berry Madness",
        price: "$30/kg",
        description: "Berry cake with chocolate layers soaked in berry syrup with muss, berry puree and Philadelphia cheese. Tender but fresh, perfect for summer parties."
    },
    {
        id: "6",
        image: "img/milky-way-cake.png",
        name: "Milky Way",
        price: "$30/kg",
        description: "Delicious cake tasting like our childhood. Two layers, souffle, and milk chocolate come in the perfect balance."
    }
];

renderCakeFillings(cakeFillings);

function renderCakeFillings(cakeFillings) {
    let cakeFillingsDomString = '';
    for(const cakeFilling of cakeFillings) {
        cakeFillingsDomString += `
        <article class="cake-fillings__card card">
            <img class="card__image" src="${cakeFilling.image}" alt="${cakeFilling.name}">
            <h3 class="card__title">${cakeFilling.name}</h3>
            <p class="card__price">${cakeFilling.price}</p> 
            <p class="card__description">${cakeFilling.description}</p>
        </article>
        `;
    }
    const cakeFillingsContainer = document.querySelector('.cake-fillings__cards');
    cakeFillingsContainer.innerHTML = cakeFillingsDomString;
}