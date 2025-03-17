import { LoginPage } from "../../page_objects/pmtool/login_page";

describe("Polymorphism tests", () => {
  it("Logout from Projects page with extended class", () => {
    new LoginPage()
      .openPmtool()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .openProjects()
      .clickProfile()
      .clickLogout();
  });
  it("Open Projects, Dashboard and Users section", () => {
    new LoginPage()
    .openPmtool()
    .login("cypress_zima_2024", "Zima2024Cypress")
    .openProjects()
    .openDashboard()
    .openUsers()
    .clickProfilSection()
    .clickLogout();
    
  });
});
