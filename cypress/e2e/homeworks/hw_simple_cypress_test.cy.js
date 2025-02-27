describe('Simple cypress test', () => {
    it('Simple cypress test', () => {

        const name ='Lucie Vildomcová';
        const email = 'vildomcova.L@abc.cz';
        const password = '12345';
        const confirmPassword = '12345';
        const age = '37';
        const gender = 'Female';
        const address = 'LV 13, Opava';

        cy.visit('https://tredgate.com/webtrain/registration.html')
        cy.get('#name').type(name)
        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#confirm-password').type(confirmPassword)
        cy.get('#basic').click()
        cy.get('#age').type(age)
        cy.get('#gender').select(gender)
        cy.get('#address').type(address)
        cy.get('#interests-sports').click()
        cy.get('#newsletter').click()
        cy.get('button').click();
    });
});