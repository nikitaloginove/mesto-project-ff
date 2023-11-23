// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
const cardTemplate = document.querySelector('#card-template').content;

const cardsContainer = document.querySelector('.places__list');

function addCard(card, removeCard) {
  const cardElement = cardTemplate
    .querySelector('.places__item')
    .cloneNode(true);

  cardElement.querySelector('.card__title').textContent = card.name;
  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.name;

  console.log(cardElement);

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', removeCard);
  
  return cardElement;
}

function removeCard(evt) {
    const item = evt.target.closest('.places__item');
    item.remove();  
}

function renderCard() {
  initialCards.forEach((card) => {
    const createCard = addCard(card, removeCard);
    cardsContainer.append(createCard);
    console.log(cardTemplate);
  });
}

renderCard();


