import { LoginPage } from "../../page_objects/pmtool/login_page";

describe('Fluent Login Tests', () => {
    it('PMTool login - Fluent API', () => {
        new LoginPage()
        .openPmtool()
        .typeUsername("cypress_zima_2024")
        .typePassword("Zima2024Cypress")
        .clickLogin();
    });

     it('PMTool login and logout - Fluent API', () => {
        new LoginPage()
        .openPmtool()
        .typeUsername("cypress_zima_2024")
        .typePassword("Zima2024Cypress")
        .clickLogin()
        .clickProfilSection()
        .clickLogout();
    });
    
});