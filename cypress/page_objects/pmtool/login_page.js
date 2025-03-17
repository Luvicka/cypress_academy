import { DashboardPage } from "./dashboard_page";
import { LostPasswordPage } from "./lost_password_page";

//login_page.js
export class LoginPage{
    constructor(){
        this.pmtoolUrl="https://tredgate.com/pmtool";
        this.usernameInput="#username";
        this.passwordInput="#password";
        this.loginButton="[type='submit']";//cy.get('.btn')//submit  "[type='.btn']"
        this.lostPasswordAnchor = "#forget_password";
        this.pageHeader = ".form-title";
        this.logoImg = ".login-page-logo img";
        this.alertDiv = ".alert.alert-danger";
    }
    openPmtool(){
        cy.visit(this.pmtoolUrl);
        return this;
    }
     
    typeUsername(username){
        cy.get(this.usernameInput).type(username);
        return this;
    }

    typePassword(password){
        cy.get(this.passwordInput).type(password);
        return this;
    }

    clickLogin(){
        cy.get(this.loginButton).click();
        return new DashboardPage();
    }

    login(username,password){
       this.typeUsername(username);
       this.typePassword(password);
       this.clickLogin();
       return new DashboardPage();
    }

    clickLostPassword(){
        cy.get(this.lostPasswordAnchor).click();
        return new LostPasswordPage();
    }

    pageHeaderHasText(headerText){
        cy.get(this.pageHeader).should("have.text", headerText);
        return this;
    }

    usernameIsVisible() {
    cy.get(this.usernameInput).should("be.visible");
    return this;
  }

  usernameHavePlaceholder(placeholder) {
    cy.get(this.usernameInput).should("have.attr", "placeholder", placeholder);
    return this;
  }

  usernameHaveValue(value) {
    cy.get(this.usernameInput).should("have.value", value);
    return this;
  }

  passwordIsVisible() {
    cy.get(this.passwordInput).should("be.visible");
    return this;
  }

  passwordHasPlaceholder(placeholder) {
    cy.get(this.passwordInput).should("have.attr", "placeholder", placeholder);
    return this;
  }

  logoIsVisible() {
    cy.get(this.logoImg).should("be.visible");
    re
  }

  alertIsVisible(){
    cy.get(this.alertDiv).should("be.visible");
    return this
  }

  alertHasText(alertText) {
    cy.get(this.alertDiv).should(
      "contain.text",
      "No match for Username and/or Password."
    );
    return this;
  }

}