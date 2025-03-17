import { HeaderSection } from "./common/header_section";
import { CreateNewProjectModal } from "./create_new_project_modal";


export class ProjectsPage extends HeaderSection {

    constructor() {
        super("module=items/items&path=21");
        this.addProjectButton = 'button[test_id="Add Project"]';
        this.projectsHeader = ".page-title";
        //cy.get(this.projectsHeader).should("contain.text","Projects");
    }

    clickAddProject() {
        cy.get(this.addProjectButton).click();
        return new CreateNewProjectModal;
    }
}