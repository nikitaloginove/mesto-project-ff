import { cardTemplate, openpopupImage } from '../index';

// создание карточки

function addCard(card, removeCard, likeCard, openpopupImage) {
    const cardElement = cardTemplate.cloneNode(true);
    const imageElement = cardElement.querySelector('.card__image');
  
    cardElement.querySelector('.card__title').textContent = card.name;
      imageElement.src = card.link; 
      imageElement.alt = card.name;
  
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => removeCard(cardElement)); 
    
    const cardLikeButton = cardElement.querySelector(".card__like-button");
    cardLikeButton.addEventListener('click', () => likeCard(cardElement));
  
   
    imageElement.addEventListener('click', () => openpopupImage(card.name, card.link));
  
    return cardElement;
}

// удаление карточки

function removeCard(cardElement) { 
    cardElement.remove();   
} 

// лайк

function likeCard(cardElement) {
    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.classList.toggle('card__like-button_is-active');
}

export { addCard, removeCard, likeCard };
