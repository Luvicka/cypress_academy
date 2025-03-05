export class DashboardPage{
constructor(){
    this.profilSection="#user_dropdown";
    this.logOut="#logout";
}
clickProfilSection(){
    cy.get(this.profilSection).click();
}

clickLogout(){
    cy.get(this.logOut).click();
}
}