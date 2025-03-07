import { LoginPage } from "../../page_objects/pmtool/login_page";

describe('Lost password test', () => {

it('Lost password test', () => {
cy.visit("https://tredgate.com/pmtool"); 
cy.get('#forget_password').click();
cy.get(':nth-child(3) > .input-icon > .form-control').type("test@tredgate.cz")
cy.get(':nth-child(2) > .input-icon > .form-control').type("test")
cy.get('.btn-info').click();


//
//cy.get('#username').type("cypress_zima_2024");
//cy.get('#password').type("Zima2024Cypress");
    
});

it('Reset lost password - Fluent', () => {
    new LoginPage()
    .openPmtool()
    .clickLostPassword()
    .typeEmail("lost_password_user@tredgate.cz")
    .typeUsername("lost_password_user")
    .clickSubmit();
});

it('Open Lost Password Page and Return to Login Page', () => {
    new LoginPage()
    .openPmtool()
    .clickLostPassword()
    .clickBack();
    
});
});