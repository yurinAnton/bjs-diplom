"use strict";

let logoutButton = new LogoutButton();

logoutButton.action = (logout) => {
   if (response.success) {
      this.location.reload();
   }
};

// Получение информации о пользователе

// Получение текущих курсов валюты

let ratesBoard = new RatesBoard();

ratesBoard.getStocks = (data) => {
   if (response.success) {
      clearTable();
      fillTable(data);
   }
};

// Операции с деньгами

let moneyManager = new MoneyManager();

moneyManager.addMoneyCallback = (data, message) => {
   addMoney(data);
   if (response.success) {
      showProfile();
      setMessage(message);
   }
};

moneyManager.conversionMoneyCallback = (data, message) => {
   convertMoney(data);
   if (response.success) {
      showProfile();
      setMessage(message);
   }
};

moneyManager.sendMoneyCallback = (data, message) => {
   transferMoney(data);
   if (response.success) {
      showProfile();
      setMessage(message);
   }
};

// Работа с избранным

let favoritesWidget = new FavoritesWidget();

favoritesWidget.getFavorites = (data) => {
   if (response.success) {
      clearTable();
      fillTable(data);
      updateUsersList();
   }
};

favoritesWidget.addUserCallback = (data) => {
   addUserToFavorites(data);
   if (response.success) {
      showProfile();
      setMessage(message);
   }
};

favoritesWidget.removeUserCallback = (data) => {
   removeUserFromFavorites(data);
   if (response.success) {
      showProfile();
      setMessage(message);
   }
};
