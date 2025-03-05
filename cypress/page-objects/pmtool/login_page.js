//login_page.js
export class LoginPage{
    constructor(){
        this.pmtoolUrl="https://tredgate.com/pmtool";
        this.usernameInput="#username";
        this.passwordInput="#password";
        this.loginButton="[type='submit']";//cy.get('.btn')//submit  "[type='.btn']"
    }
    openPmtool(){
        cy.visit(this.pmtoolUrl);
    }
     
    typeUsername(username){
        cy.get(this.usernameInput).type(username);
    }

    typePassword(password){
        cy.get(this.passwordInput).type(password);
    }

    clickLogin(){
        cy.get(this.loginButton).click();
    }

    login(username,password){
       this.typeUsername(username);
       this.typePassword(password);
       this.clickLogin();
    }
}