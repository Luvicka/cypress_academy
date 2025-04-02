import { ProjectTaskPage } from "./common/project_task_page";
import { DashboardPage } from "./dashboard_page";

export class CreateNewProjectModal {

    constructor () {
        this.projectNameInput = '[data-testid="Name"] input';
        this.saveButton = 'button[type="submit"]';
         this.prioritySelect = '[data-testid="Priority"] select';
        this.statusSelect = '[data-testid="Status"] select';
        this.dateInput = '[data-testid="Start Date"] input';
  }

    
    typeName(name) {
        cy.get(this.projectNameInput).type(name);
        return this;
    }

    clickSave() {
        cy.get(this.saveButton).click();
        return new ProjectTaskPage();
    }
    selectPriority(priority) {
        cy.get(this.prioritySelect).select(priority);
        return this;
    }

    selectStatus(status) {
        cy.get(this.statusSelect).select(status);
        return this;
    }

    typeStartDate(startDate) {
        cy.get(this.dateInput).type(startDate);
        return this;
    } 
}