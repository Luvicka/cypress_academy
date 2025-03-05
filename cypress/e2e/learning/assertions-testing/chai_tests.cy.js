describe('Chai Tests (test assertions)', () => {
    beforeEach(() => {
        new LoginPage().openPmtool()
            
    });
    it('Have Text Assert', () => {
        cy.get(".form-title").should("have.text","Login")
        
    });
});