import { LoginPage } from "../login_page";
import { MenuSection } from "./menu_section";

export class HeaderSection extends MenuSection{
constructor(){
    super();
    this.profilSection="#user_dropdown";
    this.logOut="#logout";
}
clickProfilSection(){
    cy.get(this.profilSection).click();
    return this;
}

clickLogout(){
    cy.get(this.logOut).click();
    return new LoginPage;
}

}