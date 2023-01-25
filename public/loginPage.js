"use strict";

let userForm = new UserForm();

userForm.loginFormCallback = (data) => {
   ApiConnector.login(data, (response) => {
      if (response.success) {
         this.location.reload();
      }
      setLoginErrorMessage(message);
   });
};

userForm.registerFormCallback = (data) => {
   ApiConnector.login(data, (response) => {
      if (response.success) {
         this.location.reload();
      }
      setRegisterErrorMessage(message);
   });
};
