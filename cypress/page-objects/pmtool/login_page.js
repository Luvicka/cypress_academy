import { customElement } from "../../helpers/custom_element";
import { DashboardPage } from "./dashboard_page";
import { LostPasswordPage } from "./lost_password_page";

//login_page.js
export class LoginPage{
    constructor(){
        this.pmtoolUrl="https://tredgate.com/pmtool";
           this.usernameInput = customElement("#username");
    this.passwordInput = customElement("#password");
    this.loginButton = customElement("[type='submit']");
    this.lostPasswordAnchor = customElement("#forget_password");
    this.pageHeader = customElement(".form-title");
    this.logoImg = customElement(".login-page-logo img");
    this.alertDiv = customElement(".alert.alert-danger");
    }

    openPmtool(){
        cy.visit(this.pmtoolUrl);
        return this;
    }
     
    typeUsername(username){
      this.usernameInput.get().type(username);  
      return this;
    }

    typePassword(password){
        this.passwordInput.get().type(password);
    return this;
    }

    clickLogin(){
        this.loginButton.click();
    return new DashboardPage();
    }

    login(username,password){
       this.typeUsername(username);
       this.typePassword(password);
       this.clickLogin();
       return new DashboardPage();
    }

    clickLostPassword(){
        this.lostPasswordAnchor.click();
    return new LostPasswordPage();
    }

    pageHeaderHasText(headerText){
        this.pageHeader.haveText(headerText)
    return this;
    }

    usernameIsVisible() {
    this.usernameInput.isVisible()
    return this;
  }

  usernameHavePlaceholder(placeholder) {
    this.usernameInput.havePlaceholder(placeholder)
    return this;
  }

  usernameHaveValue(value) {
    this.usernameInput.haveValue(value);
    return this;
  }

  passwordIsVisible() {
    this.passwordInput.isVisible()
    return this;
  }

  passwordHasPlaceholder(placeholder) {
    this.passwordInput.havePlaceholder(placeholder)
    return this;
  }

  logoIsVisible() {
    this.logoImg.isVisible();
    return this;
  }

  alertIsVisible(){
   this.alertDiv.isVisible();
    return this;
  }

  alertHasText(alertText) {
    this.alertDiv.containsText(alertText);
    return this;

  }

}