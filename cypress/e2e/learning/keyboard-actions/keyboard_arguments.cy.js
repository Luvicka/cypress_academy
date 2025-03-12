import { LoginPage } from "../../../page_objects/pmtool/login_page";

describe("Keyboard Arguments", () => {
  it("Confirm form by pressing enter key", () => {
    new LoginPage()
    .openPmtool()
    .typeUsername(Cypress.env("pmtool_username"))
    .typePassword(Cypress.env("pmtool_password") + "{enter}");
    
  });
});
