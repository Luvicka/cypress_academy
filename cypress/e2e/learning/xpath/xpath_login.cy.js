describe("Learning XPath", () => {
  it("Login with Xpath Selectors", () => {
    cy.visit('https://tredgate.com/pmtool')
    cy.xpath("//input[@id='username']").type("cypress_zima_2024");
    cy.xpath("//input [@id='password']").type("Zima2024Cypress");
    cy.xpath("//button [@type='submit']").click();
      cy.xpath("//i[@class='fa fa-angle-down']").click();
    cy.xpath("//i[@class='fa fa-sign-out']").click();

  });
});