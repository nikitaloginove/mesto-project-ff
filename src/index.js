// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
import './pages/index.css';
import avatarImage from './images/avatar.jpg';
import { initialCards } from './cards';
import { addCard, removeCard, likeCard } from './components/card';
import { openModal, closeModal, closeClick } from './components/modal';

const image = { name: 'Jak', link: avatarImage };

const cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');
const cardsContainer = document.querySelector('.places__list');

// переменные модальных окон

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const popupImageCaption = document.querySelector('.popup__caption');

const formElement = document.querySelector('.popup__form');
const userCardForm = document.forms['new-place'];
const nameInput = document.querySelector('.popup__input_type_name');
const nameOutput = document.querySelector('.profile__title');
const jobInput = document.querySelector('.popup__input_type_description');
const jobOutput = document.querySelector('.profile__description');

// кнопки модальных окон

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const closeButtonPopupEdit = popupEdit.querySelector('.popup__close');
const closeButtonPopupAdd = popupAdd.querySelector('.popup__close');
const closeButtonPopupImage = popupImage.querySelector('.popup__close');

// плавность модальных окон

const smoothPopupEdit = document.querySelector('.popup_type_edit');
const smoothPopupAdd = document.querySelector('.popup_type_new-card');
const smoothPopupImage = document.querySelector('.popup_type_image');

smoothPopupEdit.classList.add('popup_is-animated');
smoothPopupAdd.classList.add('popup_is-animated');
smoothPopupImage.classList.add('popup_is-animated');

// обработчики открытия и закрытия модальных окон

editButton.addEventListener('click', function openPopupEdit() {
    nameInput.value = nameOutput.textContent;
    jobInput.value = jobOutput.textContent;

    openModal(popupEdit);
});

addButton.addEventListener('click', function openPopupAdd() {
    openModal(popupAdd);
});

closeButtonPopupEdit.addEventListener('click', function closePopupEdit() {
    closeModal(popupEdit);
});

closeButtonPopupAdd.addEventListener('click', function closePopupAdd() {
    closeModal(popupAdd);
});

closeButtonPopupImage.addEventListener('click', function closePopupImage() {
    closeModal(popupImage);
});

popupEdit.addEventListener('click', closeClick);
popupAdd.addEventListener('click', closeClick);
popupImage.addEventListener('click', closeClick);

// отправка форм

formElement.addEventListener('submit', handleFormSubmit);
userCardForm.addEventListener('submit', handleFormAddSubmit);

// цикл перебора карточек

function renderCard() {
    initialCards.forEach((card) => {
      const createCard = addCard(card, removeCard, likeCard, openpopupImage);
      cardsContainer.append(createCard);
      console.log(cardTemplate);
    });
}
  
renderCard();

// сохранение инфо

function handleFormSubmit(evt) {
    evt.preventDefault(); 

    nameOutput.textContent = nameInput.value;
    jobOutput.textContent = jobInput.value;

    closeModal(popupEdit);
}

// новая карточка

function addNewCard(name, link) {
    const newCard = addCard({ name:name, link:link }, removeCard, likeCard, openpopupImage);
    cardsContainer.prepend(newCard);
}
  
function handleFormAddSubmit(evt) {
    evt.preventDefault();

    const newCardName = userCardForm.elements['place-name'].value;
    const newCardUrl = userCardForm.elements['link'].value;

    addNewCard(newCardName, newCardUrl);

    userCardForm.reset();
    
    closeModal(popupAdd);
}

// открытие карточки 

function openpopupImage(name, link) {
    const popupImageElement = popupImage.querySelector('.popup__image');
  
    popupImageElement.src = link;
    popupImageElement.setAttribute('alt', name);
    popupImageCaption.textContent = name;
  
    openModal(popupImage);
}

export { cardTemplate, openpopupImage };

























