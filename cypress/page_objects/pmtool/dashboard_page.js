import { LoginPage } from "./login_page";

export class DashboardPage{
constructor(){
    this.profilSection="#user_dropdown";
    this.logOut="#logout";
}
clickProfilSection(){
    cy.get(this.profilSection).click();
    return this;
}

clickLogout(){
    cy.get(this.logOut).click();
    return new LoginPage();
}
}