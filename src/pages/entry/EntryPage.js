import React, { useState } from "react";
import { LoginComponent } from "../../components/login/LoginComponent";
import { PasswordReset } from "../../components/password-reset/PasswordResetComponent";
import "./EntryStyle.css";

export const EntryPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Fill up the form!");
    }

    // TODO call api to submit the form
    console.log(email, password);
  };
  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return alert("Please enter your email!");
    }

    // TODO call api to submit the form
    console.log(email);
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  return (
    <div className="entry-page bg-info">
      <div className="jumbotron bg-light">
        {formLoad === "login" && (
          <LoginComponent
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            password={password}
          />
        )}

        {formLoad === "reset" && (
          <PasswordReset
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </div>
    </div>
  );
};
