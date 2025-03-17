import { LoginPage } from "../../page_objects/pmtool/login_page";

describe("Login Page Tests", () => {
    beforeEach(() => {
        new LoginPage().openPmtool();
    });

    it("Page header has text 'Login'", () => {
        new LoginPage().pageHeaderHasText("Login");
        return this;
    });
});