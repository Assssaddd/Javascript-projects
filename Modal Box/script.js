const popupButton = document.querySelector('.popup-button')
const mainSection = document.querySelector('.main')
const closeIcon = document.querySelector('.close-icon')
const overlay = document.querySelector('.overlay')
const subscribeButton = document.querySelector('.subscribe-button')

popupButton.addEventListener('click', () => {
    mainSection.classList.add('open')
})

closeIcon.addEventListener('click', () => {
    
    mainSection.classList.remove('open')
})

overlay.addEventListener('click', () => {
    mainSection.classList.remove('open')
})

subscribeButton.addEventListener('click', ()=>{
    mainSection.classList.remove('open')
})