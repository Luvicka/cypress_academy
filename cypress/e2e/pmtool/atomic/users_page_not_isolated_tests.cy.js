import { LoginPage } from "../../../page_objects/pmtool/login_page";
import { UsersPage } from "../../../page_objects/pmtool/users_page";

describe("Users Page Atomic Tests", { testIsolation: false }, () => {

   // ? V neizolovaných testech používáme namísto beforeEach before (běží vždy jen před prvním testem)
  // ! Před během prvního testu chceme vyčistit cache, protože to za nás Cypress neudělá a mohlo by to způsobit pád jiných testů!
  // ? tři čistící funkce - nutné v ne-izolovaných testech
  
   before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    new LoginPage()
      .openPmtool()
      .login(
      Cypress.env("pmtool_username"),
      Cypress.env("pmtool_password")
    );
    new UsersPage().visit();
  });

  // ! Po doběhnutí posledního testu chceme vyčistit cache, protože to za nás Cypress neudělá a mohlo by to způsobit pád jiných testů!
  // ? tři čistící funkce - nutné v ne-izolovaných testech
  

  context("Title Tests", () => {
    it("Title is visible", () => {
      new UsersPage().pageTitleIsVisible();
    });

    it("Title have text", () => {
      new UsersPage().pageTitleHaveText("Users");
    });
  });

  context("Add User Button Tests", () => {
    it("Add user button is visible", () => {
      new UsersPage().addUserButtonIsVisible();
    });

    it("Add user button have text", () => {
      new UsersPage().addUserButtonHaveText("Add User");
    });
  });
});