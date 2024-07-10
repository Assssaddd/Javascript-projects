const button = document.querySelector('button')
const close = document.querySelector('.close-icon')
const popup = document.querySelector('.popup-container')
const overlay = document.querySelector('.overlay')


button.addEventListener('click', () => {
    popup.classList.add('popup-open')
})

close.addEventListener('click', () => {
    popup.classList.remove('popup-open')
})

overlay.addEventListener('click', () => {
    popup.classList.remove('popup-open')
})