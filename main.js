const navUl = document.querySelector('nav').querySelector('ul')
const menus = navUl.querySelectorAll('li')

const divs = [
    document.querySelector('#simple'), 
    document.querySelector('#detail'),
    document.querySelector('#portfolio'),
    document.querySelector('#connectme')
]

menus[0].addEventListener('click', () => {
    menus[0].classList.add('now')
    menus[1].classList.remove('now')
    menus[2].classList.remove('now')
    menus[3].classList.remove('now')

    divs[0].classList.remove('deactivated')
    divs[1].classList.add('deactivated')
    divs[2].classList.add('deactivated')
    divs[3].classList.add('deactivated')
})

menus[1].addEventListener('click', () => {
    menus[0].classList.remove('now')
    menus[1].classList.add('now')
    menus[2].classList.remove('now')
    menus[3].classList.remove('now')

    divs[0].classList.add('deactivated')
    divs[1].classList.remove('deactivated')
    divs[2].classList.add('deactivated')
    divs[3].classList.add('deactivated')
})

menus[2].addEventListener('click', () => {
    menus[0].classList.remove('now')
    menus[1].classList.remove('now')
    menus[2].classList.add('now')
    menus[3].classList.remove('now')

    divs[0].classList.add('deactivated')
    divs[1].classList.add('deactivated')
    divs[2].classList.remove('deactivated')
    divs[3].classList.add('deactivated')
})

menus[3].addEventListener('click', () => {
    menus[0].classList.remove('now')
    menus[1].classList.remove('now')
    menus[2].classList.remove('now')
    menus[3].classList.add('now')

    divs[0].classList.add('deactivated')
    divs[1].classList.add('deactivated')
    divs[2].classList.add('deactivated')
    divs[3].classList.remove('deactivated')
})