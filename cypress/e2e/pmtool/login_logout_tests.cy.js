import { DashboardPage } from "../../page_objects/pmtool/dashboard_page";
import { LoginPage } from "../../page_objects/pmtool/login_page";

describe('Login and Logout Tests', () => {
    
    it('Login to pmatool', () => {
    const pmtool = new LoginPage();
    pmtool.openPmtool();
    pmtool.pageHeaderHasText("Login");
    pmtool.typeUsername("cypress_zima_2024");
    pmtool.typePassword("Zima2024Cypress");
    pmtool.clickLogin();  
    const profile = new DashboardPage(); 
    profile.clickProfilSection();
    profile.clickLogout();
    });

    
});