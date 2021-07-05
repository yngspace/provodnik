const modalWindow = document.querySelector('.modal')
const modalBtns = document.querySelectorAll('.btn--modal-window')
const modalClose = document.querySelector('.modal__close')

modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modalWindow.classList.add('modal--open')
        document.body.classList.add('stop-scrolling')
    })
})

modalClose.addEventListener('click', () => {
    modalWindow.classList.remove('modal--open')
    document.body.classList.remove('stop-scrolling')
})

modalWindow.addEventListener('click', () => {
    if( event.target === modalWindow ) {
        modalWindow.classList.remove('modal--open')
        document.body.classList.remove('stop-scrolling')
    }
})