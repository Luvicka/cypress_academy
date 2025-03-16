export class BasePage {
    constructor(path){
        this.baseUrl = "https://tredgate.com/pmtool/index.php?";
        this.path = path;    
    }

    visit() {
        const finalUrl = this.baseUrl + this.path;
        cy.visit(finalUrl);
        return this;
    }
}