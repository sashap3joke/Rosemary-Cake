const title = document.querySelector('.ourcontacts__title');

const titles = [
    'Our Contacts',
    'Contact Us!',
    'Find Us!',
    'Get in Touch'
]

const getRandomTitle = (arr) => arr[Math.floor(Math.random() * arr.length)];
title.innerText = getRandomTitle(titles);