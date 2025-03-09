import { LoginPage } from "../../page_objects/pmtool/login_page";

describe('Fluent Login Tests', () => {
    beforeEach(() => {
         new LoginPage().openPmtool();
    });    it('PMTool login - Fluent API', () => {
        new LoginPage()
        .typeUsername("cypress_zima_2024")
        .typePassword("Zima2024Cypress")
        .clickLogin();
    });

     it('PMTool login and logout - Fluent API', () => {
        new LoginPage()
        .typeUsername("cypress_zima_2024")
        .typePassword("Zima2024Cypress")
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