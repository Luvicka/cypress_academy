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
        this.rememberMe = ".checkbox";
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

    usernameHasPlaceholder(usernamePlaceholder){
        cy.get(this.usernameInput).should("have.attr","placeholder",usernamePlaceholder);
        return this;
    }

    passwordHasPlaceholder(passwordPlaceholder){
        cy.get(this.passwordInput).should("have.attr","placeholder",passwordPlaceholder);
        return this;
    }

     rememberMeContainText(rememberMeText){
        cy.get(this.rememberMe).should("contain",rememberMeText);
        return this;
    }
    
    loginButtonHasText(loginText){
        cy.get(this.loginButton).should("have.text",loginText);
        return this;
    }

    passwordForgottenContainText(passwordForgottenText){
        cy.get(this.lostPasswordAnchor).should("contain",passwordForgottenText);
        return this;
    }  
}