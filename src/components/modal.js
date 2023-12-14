// модальные окна

function openModal(modalElement) {
    modalElement.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeEsc);   
}

function closeModal(modalElement) {
    modalElement.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeEsc);
}

function closeEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_is-opened');
        if (popupOpened) {
            closeModal(popupOpened);
        }
    }
}

function closeClick(evt) {
    const modalElement = evt.currentTarget;
    if (evt.target === modalElement) {
        closeModal(modalElement);
    }
}

export { openModal, closeModal, closeClick };