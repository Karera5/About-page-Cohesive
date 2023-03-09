const nav = document.getElementById('nav')
const navToggle = document.querySelector('.nav-toggle')
const closeBtn = document.querySelector('.close-btn')

navToggle.addEventListener('click', () => {
    nav.classList.toggle('fixed-nav')
})

closeBtn.addEventListener('click', () => {
    nav.classList.remove('fixed-nav')
})