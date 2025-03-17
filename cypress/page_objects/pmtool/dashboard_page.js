import { HeaderSection } from "./common/header_section";
import { LoginPage } from "./login_page";

export class DashboardPage extends HeaderSection{
constructor(){
    super("module=dashboard/dashboard"); // ? super() - provolání děděného constructoru, je povinný a musí být vždy v constructor() na prvním místě.
    this.profileButton = "#user_dropdown";
    this.logoutButton = "#logout";
    this.welcomePageHeader = "#welcome-page-header";

    // ! Assert v constructoru nemůžeme použít, pokud máme funkcionalitu přímého otevření (BasePage.visit)
    // ! když zavoláme new Dashboard().visit(), tak se nejdříve vyhodnocuje constructor a až potom visit() a to znamená, že před tím než stránku otevřeme už kontrolujeme nějaký assert, což znamená, že assert selže.

    // cy.get(this.welcomePageHeader).should("be.visible");

    // ? Pokud chci kontrolovat načtení stránky, potom je potřeba vytvořit samostatnou metodu, která se bude ručně provolávat.

}

clickProfile() {
    cy.get(this.profileButton).click();
    return this;
  }

  clickLogout() {
    cy.get(this.logoutButton).click();
    return new LoginPage();
  }

  welcomePageHeaderIsVisible() {
    cy.get(this.welcomePageHeader).should("be.visible");
    return this;
  }

}