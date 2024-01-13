import { cardTemplate, openpopupImage } from '../index';
import { putLike, deleteLike, deleteCard } from '../api';
import { closeModal } from './modal';



// создание карточки

function addCard(card, profileId, removeCard, likeCard, openpopupImage) {
    const cardElement = cardTemplate.cloneNode(true);
    const imageElement = cardElement.querySelector('.card__image');
    const likeCount = cardElement.querySelector(".card__like-count");
  
    cardElement.querySelector('.card__title').textContent = card.name;
      imageElement.src = card.link; 
      imageElement.alt = card.name;
    likeCount.textContent = card.likes.length;
  
    const deleteButton = cardElement.querySelector('.card__delete-button');

    if (profileId !== card.owner["_id"]) {
      deleteButton.remove();
    } else {
      deleteButton.addEventListener('click', () => {
        removeCard(card, cardElement);
      });
    }

    const cardLikeButton = cardElement.querySelector(".card__like-button");

    if (isLikeMine(card, profileId)) {
      cardLikeButton.classList.add("card__like-button_is-active");
    } else {
      cardLikeButton.classList.remove("card__like-button_is-active");
    }

    cardLikeButton.addEventListener("click", () => {
      likeCard(card, profileId, cardElement);
    });

    imageElement.addEventListener('click', () => openpopupImage(card.name, card.link));
    
    
    return cardElement;
}

// удаление карточки


function removeCard(cardElement) {

  deleteCard(cardId)
    .then(() => {
      document.getElementById(cardElement.cardId).remove();
    })
    .catch((err) => console.log(err));
}

// лайк


function likeCard(card, profileId, cardElement) {
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const likeCount = cardElement.querySelector(".card__like-count");
  if (isLikeMine(card, profileId)) {
    deleteLike(card._id)
      .then((res) => {
        likeCount.textContent = res.likes.length;
        cardLikeButton.classList.remove("card__like-button_is-active");
        card.likes = res.likes;
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    putLike(card._id)
      .then((res) => {
        likeCount.textContent = res.likes.length;
        cardLikeButton.classList.add("card__like-button_is-active");
        card.likes = res.likes;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

function isLikeMine(card, profileId) {
  return card.likes.some((item) => item._id === profileId);
}


  

export { addCard, removeCard, likeCard };
