const title = document.querySelector('.fillings__form-title , .sweets-page__form-title , .contacts__form-title');

const titles = [
    'Choose Your Favorite Taste!',
    'Order Your Pack Of Cupcakes!!',
    'Order Fresh Handcrafted Sweets At Rosemary Cakes!'
]

const getRandomTitle = (arr) => arr[Math.floor(Math.random() * arr.length)];
title.innerText = getRandomTitle(titles);