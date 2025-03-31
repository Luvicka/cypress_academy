export class ConfirmationPage {
    constructor() {
        this.successfulMessage = ".maintext";
    }

    assertConfirmationMessage(){
         cy.get(this.successfulMessage).should("contains.text","Your Account Has Been Created!");
         return this;
    }
}