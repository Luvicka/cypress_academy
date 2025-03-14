import { HeaderSection } from "./common/header_section";
import { LoginPage } from "./login_page";

export class DashboardPage extends HeaderSection{
constructor(){
    super();
    this.profileButton = "#user_dropdown";
    this.logoutButton = "#logout";
    this.welcomePageHeader = "#welcome-page-header";
    cy.get(this.welcomePageHeader).should("be.visible");
}


clickProfile() {
    cy.get(this.profileButton).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }

}