const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-4',
    headers: {
      authorization: 'aa504727-28ec-4b0c-9a33-5d6b2d4b8b1f',
      'Content-Type': 'application/json'
    }
};

// проверка запроса

const checkRequest = (res) => {
    if (res.ok) return res.json()
    return Promise.reject(`Ошибка: ${res.status}`);
};    

// загрузка информации о пользователе

export const getUserInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers,
    })
    .then((res) => checkRequest(res));
};

// загрузка карточек

export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers,
    })
    .then((res) => checkRequest(res));
};

// редактирование профиля

export const сhangeUserInfo = (nameOutput, jobOutput) => {
    return fetch(`${config.baseUrl}/users/me`, {
      method: "PATCH",
      headers: config.headers,
      body: JSON.stringify({
        name: nameOutput,
        about: jobOutput,
      }),
    }).then((res) => checkRequest(res));
};

// добавление карточки

export const newCardUser = (name, link) => {
    return fetch(`${config.baseUrl}/cards`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => checkRequest(res));
};

// удаление карточки

export function deleteCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => checkRequest(res));
}

// поставить лайк

export function putLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((res) => checkRequest(res));
}

// удалить лайк

export function deleteLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => checkRequest(res));
}

// сменить аватар

export function changeAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({ avatar }),
  }).then((res) => checkRequest(res));
}



