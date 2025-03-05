import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe('Mocha tests', () => {
    beforeEach(() => {
        cy.viewport(800,600)
        cy.log("runs before ever test")
    });
    it('Visit pmtool', () => {
        new LoginPage().openPmtool();
    });

    it('Pm tool login', () => {
        new LoginPage().openPmtool()
        .typeUsername("cypress_zima_2024")
        .typePassword("Zima2024Cypress")
        .clickLogin();
    });

    afterEach(() => {
        cy.log("Function after each test")
    });
    
});