"use strict";

let userForm = new UserForm();

userForm.loginFormCallback = (data) => {
   ApiConnector.login(data, (response) => {
      if (response === data) {
         this.location.reload();
      }
      return loginErrorMessage(message);
   });
};

userForm.registerFormCallback = (data) => {
   ApiConnector.login(data, (response) => {
      if (response === data) {
         this.location.reload();
      }
      return registerErrorMessage(message);
   });
};
