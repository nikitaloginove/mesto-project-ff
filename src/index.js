// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
import './pages/index.css';
import { addCard, removeCard, likeCard } from './components/card';
import { openModal, closeModal, closeClick } from './components/modal';
import { enableValidation, clearValidation } from './validation';
import { getUserInfo, getInitialCards, сhangeUserInfo, newCardUser, changeAvatar } from './api';

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');
const cardsContainer = document.querySelector('.places__list');

// переменные модальных окон

const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const popupImageElement = popupImage.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__caption');
const profileForm = document.forms['edit-profile'];

const formElement = document.querySelector('.popup__form');
const userCardForm = document.forms['new-place'];

const nameInput = document.querySelector('.popup__input_type_name');
const nameOutput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.popup__input_type_description');
const jobOutput = document.querySelector('.profile__description');

const profileAvatar = document.querySelector(".profile__image");
const popupFormEditAvatar = document.forms["edit-avatar"];
const popupAvatar = document.querySelector(".popup_type_avatar");

// кнопки модальных окон

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popupAvatarButton = popupAvatar.querySelector('.popup__button');
const popupAddButton = popupAdd.querySelector('.popup__button');
const popupEditButton = popupEdit.querySelector('.popup__button');

// плавность модальных окон

popupEdit.classList.add('popup_is-animated');
popupAdd.classList.add('popup_is-animated');
popupImage.classList.add('popup_is-animated');
popupAvatar.classList.add('popup_is-animated');

// api

let profileId = '';

Promise.all([getUserInfo(), getInitialCards()])

  .then(([profile, card]) => {
    profileId = profile._id;
    nameOutput.textContent = profile.name;
    jobOutput.textContent = profile.about;
    profileAvatar.style.backgroundImage = `url(${profile.avatar})`;

    card.forEach((card) => {
        cardsContainer.append(
        addCard(card, profileId, removeCard, likeCard, openpopupImage)
      );
    });
  })
  .catch((error) => console.log("Ошибка:", error));

// валидация

enableValidation(validationConfig);

// обработчики открытия и закрытия модальных окон

editButton.addEventListener('click', function openPopupEdit() {
    clearValidation(profileForm, validationConfig);
    nameInput.value = nameOutput.textContent;
    jobInput.value = jobOutput.textContent;

    openModal(popupEdit);
});

addButton.addEventListener('click', function openPopupAdd() {
    clearValidation(userCardForm, validationConfig);
    userCardForm.reset();
    
    openModal(popupAdd);
});

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closeModal(popup)
        }
        if (evt.target.classList.contains('popup__close')) {
            closeModal(popup)
        }
        
        closeClick(evt)
    })
})

// отправка форм

formElement.addEventListener('submit', handleFormSubmit);
userCardForm.addEventListener('submit', handleFormAddSubmit);

// смена аватара

const handleAvatarFormSubmit = (evt) => {
  evt.preventDefault();

  const buttonText = popupAvatarButton.textContent;
  popupAvatarButton.textContent = "Сохранение...";

  changeAvatar(popupFormEditAvatar.link.value)
    .then((profile) => {
      profileAvatar.style.backgroundImage = `url(${profile.avatar})`;
      closeModal(popupAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => (popupAvatarButton.textContent = buttonText));
};
popupFormEditAvatar.addEventListener("submit", handleAvatarFormSubmit);

profileAvatar.addEventListener("click", () => {
  popupFormEditAvatar.reset();
  clearValidation(popupFormEditAvatar, validationConfig);
  openModal(popupAvatar);
});


// сохранение инфо

function handleFormSubmit(evt) {
    evt.preventDefault(); 
    
    const buttonText = popupEditButton.textContent;
    popupEditButton.textContent = "Сохранение...";

    сhangeUserInfo(nameInput.value, jobInput.value)
    .then((profile) => {
      nameOutput.textContent = profile.name;
      jobOutput.textContent = profile.about;

      closeModal(popupEdit);
    })
    .catch((error) => console.log("данные не обработаны:", error))
    .finally(() => (popupEditButton.textContent = buttonText));
    
    clearValidation(profileForm, validationConfig);
}

// новая карточка
  
function handleFormAddSubmit(evt) {
    evt.preventDefault();
    
    const buttonText = popupAddButton.textContent;
    popupAddButton.textContent = "Сохранение...";

    const newCardName = userCardForm.elements['place-name'].value;
    const newCardUrl = userCardForm.elements['link'].value;

    newCardUser(newCardName, newCardUrl)
    .then((card) => {
      const newCard = addCard(
        card,
        profileId,
        removeCard,
        likeCard,
        openpopupImage
      );
      cardsContainer.prepend(newCard);
      userCardForm.reset();
      closeModal(popupAdd);
    })
    .catch((error) => console.log("данные не обработаны:", error))
    .finally(() => (popupAddButton.textContent = buttonText));

    clearValidation(userCardForm, validationConfig);
}

// открытие карточки 

function openpopupImage(name, link) {
  
    popupImageElement.src = link;
    popupImageElement.setAttribute('alt', name);
    popupImageCaption.textContent = name;
  
    openModal(popupImage);
}

export { cardTemplate, openpopupImage };

























