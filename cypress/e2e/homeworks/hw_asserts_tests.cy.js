import { LoginPage } from "../../page_objects/pmtool/login_page";

describe("HW Asserts in Cypress", () => {
    beforeEach(() => {
       new LoginPage().openPmtool(); 
    });

    it("Username placeholder is 'Username'", () => {
        new LoginPage().usernameHasPlaceholder("Username");
    });

    it("Password placeholder is 'Password'", () => {
        new LoginPage().passwordHasPlaceholder("Password");
    });

    it("Remember Me contain text 'Remember Me'", () => {
        new LoginPage().rememberMeContainText("Remember Me");
    });

    it("Login button has text 'Login'", () => {
        new LoginPage().loginButtonHasText("Login");
    });

    it("Password forgotten contain text 'Password forgotten'", () => {
        new LoginPage().passwordForgottenContainText("Password forgotten");
    });
});