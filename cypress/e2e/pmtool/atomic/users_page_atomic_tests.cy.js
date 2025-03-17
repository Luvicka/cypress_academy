import { LoginPage } from "../../../page_objects/pmtool/login_page";
import { UsersPage } from "../../../page_objects/pmtool/users_page";

describe("Users Page Atomic Tests", () => {
   beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .login(
      Cypress.env("pmtool_username"),
      Cypress.env("pmtool_password")
    );
    new UsersPage().visit();
  });

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