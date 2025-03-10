import { LoginPage } from "../../page_objects/pmtool/login_page";

describe('Fluent Login Tests', () => {

    const pmtoolUsername = Cypress.env("pmtool_username");
    const pmtoolPassword = Cypress.env("pmtool_password");

    beforeEach(() => {
         new LoginPage().openPmtool();
    });    it('PMTool login - Fluent API', () => {
        new LoginPage()
        .typeUsername(pmtoolUsername)
        .typePassword(pmtoolPassword)
        .clickLogin();
    });

     it('PMTool login and logout - Fluent API', () => {
        new LoginPage()
        .typeUsername(pmtoolUsername)
        .typePassword(pmtoolPassword)
        .clickLogin()
        .clickProfilSection()
        .clickLogout();
    });

    it("Open lost password and get back to login", () => {
        new LoginPage()
        .clickLostPassword()
        .clickBack();
    });
    
});