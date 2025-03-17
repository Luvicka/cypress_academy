import { HeaderSection } from "../common/header_section.js";

export class ProjectTaskPage extends HeaderSection {
 
    // ? constructor(projectId="") <== použití výchozí hodnoty pro parametr projectId. Kdokoliv tento objekt zakládá může, ale nemusí poslat projectId. Pokud ho nepošle, parametru projectId se přiřadí hodnota ""
 
    constructor(projectId = "") {
    super(`module=items/items&path=21-${projectId}}/22`);
  }
}
