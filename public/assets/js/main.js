const button = document.querySelector('button');
const nav = document.querySelector('header > nav');
const form = document.querySelector('form');
const thankyou = document.querySelector('.thank-you');

button.addEventListener('click', function () {
    if (nav.style.display === 'flex') {
        document.body.classList.remove('menu-open');
        this.classList.remove('is-active');
        nav.style.display = 'none';
    } else {
        document.body.classList.add('menu-open');
        this.classList.add('is-active');
        nav.style.display = 'flex';
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // TODO: Add Fetch/server logic

    form.style.display = 'none';
    thankyou.style.display = 'block';
});
