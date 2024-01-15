/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeAvatar: () => (/* binding */ changeAvatar),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   deleteLike: () => (/* binding */ deleteLike),\n/* harmony export */   getInitialCards: () => (/* binding */ getInitialCards),\n/* harmony export */   getUserInfo: () => (/* binding */ getUserInfo),\n/* harmony export */   newCardUser: () => (/* binding */ newCardUser),\n/* harmony export */   putLike: () => (/* binding */ putLike),\n/* harmony export */   \"сhangeUserInfo\": () => (/* binding */ сhangeUserInfo)\n/* harmony export */ });\nvar config = {\n  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-4',\n  headers: {\n    authorization: 'aa504727-28ec-4b0c-9a33-5d6b2d4b8b1f',\n    'Content-Type': 'application/json'\n  }\n};\n\n// проверка запроса\n\nvar checkRequest = function checkRequest(res) {\n  if (res.ok) return res.json();\n  return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n};\n\n// загрузка информации о пользователе\n\nvar getUserInfo = function getUserInfo() {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    headers: config.headers\n  }).then(function (res) {\n    return checkRequest(res);\n  });\n};\n\n// загрузка карточек\n\nvar getInitialCards = function getInitialCards() {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    headers: config.headers\n  }).then(function (res) {\n    return checkRequest(res);\n  });\n};\n\n// редактирование профиля\n\nvar сhangeUserInfo = function сhangeUserInfo(nameOutput, jobOutput) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    method: \"PATCH\",\n    headers: config.headers,\n    body: JSON.stringify({\n      name: nameOutput,\n      about: jobOutput\n    })\n  }).then(function (res) {\n    return checkRequest(res);\n  });\n};\n\n// добавление карточки\n\nvar newCardUser = function newCardUser(name, link) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    method: \"POST\",\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      link: link\n    })\n  }).then(function (res) {\n    return checkRequest(res);\n  });\n};\n\n// удаление карточки\n\nfunction deleteCard(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/\").concat(cardId), {\n    method: \"DELETE\",\n    headers: config.headers\n  }).then(function (res) {\n    return checkRequest(res);\n  });\n}\n\n// поставить лайк\n\nfunction putLike(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(cardId), {\n    method: \"PUT\",\n    headers: config.headers\n  }).then(function (res) {\n    return checkRequest(res);\n  });\n}\n\n// удалить лайк\n\nfunction deleteLike(cardId) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(cardId), {\n    method: \"DELETE\",\n    headers: config.headers\n  }).then(function (res) {\n    return checkRequest(res);\n  });\n}\n\n// сменить аватар\n\nfunction changeAvatar(avatar) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me/avatar\"), {\n    method: \"PATCH\",\n    headers: config.headers,\n    body: JSON.stringify({\n      avatar: avatar\n    })\n  }).then(function (res) {\n    return checkRequest(res);\n  });\n}\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCard: () => (/* binding */ addCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard),\n/* harmony export */   removeCard: () => (/* binding */ removeCard)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ \"./src/components/api.js\");\n\n\n\n// создание карточки\n\nfunction addCard(card, profileId, removeCard, likeCard, openpopupImage) {\n  var cardElement = _index__WEBPACK_IMPORTED_MODULE_0__.cardTemplate.cloneNode(true);\n  var imageElement = cardElement.querySelector('.card__image');\n  var likeCount = cardElement.querySelector(\".card__like-count\");\n  cardElement.querySelector('.card__title').textContent = card.name;\n  imageElement.src = card.link;\n  imageElement.alt = card.name;\n  likeCount.textContent = card.likes.length;\n  var deleteButton = cardElement.querySelector('.card__delete-button');\n  if (profileId !== card.owner[\"_id\"]) {\n    deleteButton.remove();\n  } else {\n    deleteButton.addEventListener('click', function (evt) {\n      removeCard(evt, card._id);\n    });\n  }\n  var cardLikeButton = cardElement.querySelector(\".card__like-button\");\n  if (isLikeMine(card, profileId)) {\n    cardLikeButton.classList.add(\"card__like-button_is-active\");\n  } else {\n    cardLikeButton.classList.remove(\"card__like-button_is-active\");\n  }\n  cardLikeButton.addEventListener(\"click\", function () {\n    likeCard(card, profileId, cardElement);\n  });\n  imageElement.addEventListener('click', function () {\n    return openpopupImage(card.name, card.link);\n  });\n  return cardElement;\n}\n\n// удаление карточки\n\nfunction removeCard(evt, cardId) {\n  (0,_api__WEBPACK_IMPORTED_MODULE_1__.deleteCard)(cardId).then(function () {\n    return evt.target.closest('.card').remove();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n\n// лайк\n\nfunction likeCard(card, profileId, cardElement) {\n  var cardLikeButton = cardElement.querySelector(\".card__like-button\");\n  var likeCount = cardElement.querySelector(\".card__like-count\");\n  if (isLikeMine(card, profileId)) {\n    (0,_api__WEBPACK_IMPORTED_MODULE_1__.deleteLike)(card._id).then(function (res) {\n      likeCount.textContent = res.likes.length;\n      cardLikeButton.classList.remove(\"card__like-button_is-active\");\n      card.likes = res.likes;\n    }).catch(function (error) {\n      console.log(error);\n    });\n  } else {\n    (0,_api__WEBPACK_IMPORTED_MODULE_1__.putLike)(card._id).then(function (res) {\n      likeCount.textContent = res.likes.length;\n      cardLikeButton.classList.add(\"card__like-button_is-active\");\n      card.likes = res.likes;\n    }).catch(function (error) {\n      console.log(error);\n    });\n  }\n}\nfunction isLikeMine(card, profileId) {\n  return card.likes.some(function (item) {\n    return item._id === profileId;\n  });\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeClick: () => (/* binding */ closeClick),\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n// модальные окна\n\nfunction openModal(modalElement) {\n  modalElement.classList.add('popup_is-opened');\n  document.addEventListener('keydown', closeEsc);\n}\nfunction closeModal(modalElement) {\n  modalElement.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', closeEsc);\n}\nfunction closeEsc(evt) {\n  if (evt.key === 'Escape') {\n    var popupOpened = document.querySelector('.popup_is-opened');\n    if (popupOpened) {\n      closeModal(popupOpened);\n    }\n  }\n}\nfunction closeClick(evt) {\n  var modalElement = evt.currentTarget;\n  if (evt.target === modalElement) {\n    closeModal(modalElement);\n  }\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\nvar showInputError = function showInputError(formElement, inputElement, errorMessage) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add('popup__input_type_error');\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add('popup__input-error_active');\n};\nvar hideInputError = function hideInputError(formElement, inputElement) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove('popup__input_type_error');\n  errorElement.classList.remove('popup__input-error_active');\n  errorElement.textContent = '';\n};\nvar isValid = function isValid(formElement, inputElement) {\n  if (inputElement.validity.patternMismatch) {\n    inputElement.setCustomValidity(inputElement.dataset.errorMessage);\n  } else {\n    inputElement.setCustomValidity(\"\");\n  }\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, inputElement.validationMessage);\n  } else {\n    hideInputError(formElement, inputElement);\n  }\n};\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  return inputList.some(function (inputElement) {\n    return !inputElement.validity.valid;\n  });\n};\nvar toggleButtonState = function toggleButtonState(inputList, buttonElement) {\n  if (hasInvalidInput(inputList)) {\n    buttonElement.disabled = true;\n    buttonElement.classList.add('popup__button_disabled');\n  } else {\n    buttonElement.disabled = false;\n    buttonElement.classList.remove('popup__button_disabled');\n  }\n};\nvar setEventListeners = function setEventListeners(formElement) {\n  var inputList = Array.from(formElement.querySelectorAll('.popup__input'));\n  var buttonElement = formElement.querySelector('.popup__button');\n  toggleButtonState(inputList, buttonElement);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener('input', function () {\n      isValid(formElement, inputElement);\n      toggleButtonState(inputList, buttonElement);\n    });\n  });\n};\nvar enableValidation = function enableValidation(validationConfig) {\n  var formList = Array.from(document.querySelectorAll(validationConfig.formSelector));\n  formList.forEach(function (formElement) {\n    formElement.addEventListener('submit', function (evt) {\n      evt.preventDefault();\n    });\n    setEventListeners(formElement, validationConfig);\n  });\n};\nvar clearValidation = function clearValidation(formElement, validationConfig) {\n  var inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));\n  var buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);\n  buttonElement.classList.add(validationConfig.inactiveButtonClass);\n  buttonElement.disabled = true;\n  inputList.forEach(function (inputElement) {\n    hideInputError(formElement, inputElement, validationConfig);\n    inputElement.setCustomValidity(\"\");\n  });\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardTemplate: () => (/* binding */ cardTemplate),\n/* harmony export */   openpopupImage: () => (/* binding */ openpopupImage)\n/* harmony export */ });\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card */ \"./src/components/card.js\");\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal */ \"./src/components/modal.js\");\n/* harmony import */ var _components_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/validation */ \"./src/components/validation.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/api */ \"./src/components/api.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n// @todo: Темплейт карточки\n\n// @todo: DOM узлы\n\n// @todo: Функция создания карточки\n\n// @todo: Функция удаления карточки\n\n// @todo: Вывести карточки на страницу\n\n\n\n\n\nvar validationConfig = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__input',\n  submitButtonSelector: '.popup__button',\n  inactiveButtonClass: 'popup__button_disabled',\n  inputErrorClass: 'popup__input_type_error',\n  errorClass: 'popup__error_visible'\n};\nvar cardTemplate = document.querySelector('#card-template').content.querySelector('.places__item');\nvar cardsContainer = document.querySelector('.places__list');\n\n// переменные модальных окон\n\nvar popups = document.querySelectorAll('.popup');\nvar popupEdit = document.querySelector('.popup_type_edit');\nvar popupAdd = document.querySelector('.popup_type_new-card');\nvar popupImage = document.querySelector('.popup_type_image');\nvar popupImageElement = popupImage.querySelector('.popup__image');\nvar popupImageCaption = document.querySelector('.popup__caption');\nvar profileForm = document.forms['edit-profile'];\nvar formElement = document.querySelector('.popup__form');\nvar userCardForm = document.forms['new-place'];\nvar nameInput = document.querySelector('.popup__input_type_name');\nvar nameOutput = document.querySelector('.profile__title');\nvar jobInput = document.querySelector('.popup__input_type_description');\nvar jobOutput = document.querySelector('.profile__description');\nvar profileAvatar = document.querySelector(\".profile__image\");\nvar popupFormEditAvatar = document.forms[\"edit-avatar\"];\nvar popupAvatar = document.querySelector(\".popup_type_avatar\");\n\n// кнопки модальных окон\n\nvar editButton = document.querySelector('.profile__edit-button');\nvar addButton = document.querySelector('.profile__add-button');\nvar popupAvatarButton = popupAvatar.querySelector('.popup__button');\nvar popupAddButton = popupAdd.querySelector('.popup__button');\nvar popupEditButton = popupEdit.querySelector('.popup__button');\n\n// плавность модальных окон\n\npopupEdit.classList.add('popup_is-animated');\npopupAdd.classList.add('popup_is-animated');\npopupImage.classList.add('popup_is-animated');\npopupAvatar.classList.add('popup_is-animated');\n\n// api\n\nvar profileId = '';\nPromise.all([(0,_components_api__WEBPACK_IMPORTED_MODULE_4__.getUserInfo)(), (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.getInitialCards)()]).then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n    profile = _ref2[0],\n    card = _ref2[1];\n  profileId = profile._id;\n  nameOutput.textContent = profile.name;\n  jobOutput.textContent = profile.about;\n  profileAvatar.style.backgroundImage = \"url(\".concat(profile.avatar, \")\");\n  card.forEach(function (card) {\n    cardsContainer.append((0,_components_card__WEBPACK_IMPORTED_MODULE_1__.addCard)(card, profileId, _components_card__WEBPACK_IMPORTED_MODULE_1__.removeCard, _components_card__WEBPACK_IMPORTED_MODULE_1__.likeCard, openpopupImage));\n  });\n}).catch(function (error) {\n  return console.log(\"Ошибка:\", error);\n});\n\n// валидация\n\n(0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.enableValidation)(validationConfig);\n\n// обработчики открытия и закрытия модальных окон\n\neditButton.addEventListener('click', function openPopupEdit() {\n  (0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(profileForm, validationConfig);\n  profileForm.reset();\n  nameInput.value = nameOutput.textContent;\n  jobInput.value = jobOutput.textContent;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupEdit);\n});\naddButton.addEventListener('click', function openPopupAdd() {\n  (0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(userCardForm, validationConfig);\n  userCardForm.reset();\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupAdd);\n});\npopups.forEach(function (popup) {\n  popup.addEventListener('mousedown', function (evt) {\n    if (evt.target.classList.contains('popup_opened')) {\n      (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popup);\n    }\n    if (evt.target.classList.contains('popup__close')) {\n      (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popup);\n    }\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeClick)(evt);\n  });\n});\n\n// отправка форм\n\nformElement.addEventListener('submit', handleFormEditSubmit);\nuserCardForm.addEventListener('submit', handleFormAddSubmit);\n\n// смена аватара\n\nvar handleAvatarFormSubmit = function handleAvatarFormSubmit(evt) {\n  evt.preventDefault();\n  var buttonText = popupAvatarButton.textContent;\n  popupAvatarButton.textContent = \"Сохранение...\";\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.changeAvatar)(popupFormEditAvatar.link.value).then(function (profile) {\n    profileAvatar.style.backgroundImage = \"url(\".concat(profile.avatar, \")\");\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupAvatar);\n  }).catch(function (err) {\n    console.log(err);\n  }).finally(function () {\n    return popupAvatarButton.textContent = buttonText;\n  });\n};\npopupFormEditAvatar.addEventListener(\"submit\", handleAvatarFormSubmit);\nprofileAvatar.addEventListener(\"click\", function () {\n  popupFormEditAvatar.reset();\n  (0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(popupFormEditAvatar, validationConfig);\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupAvatar);\n});\n\n// сохранение инфо\n\nfunction handleFormEditSubmit(evt) {\n  evt.preventDefault();\n  var buttonText = popupEditButton.textContent;\n  popupEditButton.textContent = \"Сохранение...\";\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__[\"сhangeUserInfo\"])(nameInput.value, jobInput.value).then(function (profile) {\n    nameOutput.textContent = profile.name;\n    jobOutput.textContent = profile.about;\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupEdit);\n  }).catch(function (error) {\n    return console.log(\"данные не обработаны:\", error);\n  }).finally(function () {\n    return popupEditButton.textContent = buttonText;\n  });\n}\n\n// новая карточка\n\nfunction handleFormAddSubmit(evt) {\n  evt.preventDefault();\n  var buttonText = popupAddButton.textContent;\n  popupAddButton.textContent = \"Сохранение...\";\n  var newCardName = userCardForm.elements['place-name'].value;\n  var newCardUrl = userCardForm.elements['link'].value;\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_4__.newCardUser)(newCardName, newCardUrl).then(function (card) {\n    var newCard = (0,_components_card__WEBPACK_IMPORTED_MODULE_1__.addCard)(card, profileId, _components_card__WEBPACK_IMPORTED_MODULE_1__.removeCard, _components_card__WEBPACK_IMPORTED_MODULE_1__.likeCard, openpopupImage);\n    cardsContainer.prepend(newCard);\n    userCardForm.reset();\n    (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupAdd);\n  }).catch(function (error) {\n    return console.log(\"данные не обработаны:\", error);\n  }).finally(function () {\n    return popupAddButton.textContent = buttonText;\n  });\n}\n\n// открытие карточки \n\nfunction openpopupImage(name, link) {\n  popupImageElement.src = link;\n  popupImageElement.setAttribute('alt', name);\n  popupImageCaption.textContent = name;\n  (0,_components_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupImage);\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;