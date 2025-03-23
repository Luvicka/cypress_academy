describe('Base ULR Tests', () => {
    it('Using baseURL in visit', () => {
      cy.visit("/");  
    });

    it('Open different URL', () => {
        cy.visit("https://tredgate.cz");
    });
});