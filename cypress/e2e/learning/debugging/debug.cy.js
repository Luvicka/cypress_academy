describe("Debugging", () => {

    it("Using Debug Mode in Cypress", () => {
    cy.visit("https://tredgate.com/pmtool");    
    cy.get('#username').type("cypress_zima_2024").debug();
    cy.get('#password').debug().type("Zima2024Cypress");
    cy.get('.btn').click().debug();  
    });

    it.skip("Using pause() function", () => {
    cy.visit("https://tredgate.com/pmtool");    
    cy.get('#username').type("cypress_zima_2024").pause();
    cy.get('#password').pause().type("Zima2024Cypress");
    cy.get('.btn').click().pause();    
    });

    it.skip('Wrong selector', () => {
        cy.visit("https://tredgate.com/pmtool");    
    cy.get('#wrong_selector').type("cypress_zima_2024");

    });
   
    it('Wrong again', () => {
        
    });
    afterEach(() => {
        cy.log("Co se stane");
    });
});