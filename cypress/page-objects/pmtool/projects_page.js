import { customElement } from "../../helpers/custom_element";
import { HeaderSection } from "./common/header_section";
import { CreateNewProjectModal } from "./create_new_project_modal";


export class ProjectsPage extends HeaderSection {

    constructor() {
        super("module=items/items&path=21");
        this.addProjectButton = customElement('button[test_id="Add Project"]');
       // this.projectsHeader = ".page-title";
        //cy.get(this.projectsHeader).should("contain.text","Projects");
    }

    clickAddProject() {
        this.addProjectButton.click();
       // cy.get(this.addProjectButton).click();
        return new CreateNewProjectModal();
    }
}