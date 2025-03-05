import { DashboardPage } from "../../page-objects/pmtool/dashboard_page";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe('Login and Logout Tests', () => {
    it('Login to pmatool', () => {
    const pmtool = new LoginPage();
    const profile = new DashboardPage();
    pmtool.openPmtool();
    pmtool.typeUsername("cypress_zima_2024");
    pmtool.typePassword("Zima2024Cypress");
    pmtool.clickLogin();   
    profile.clickProfilSection();
    profile.clickLogout();
    });

    
});