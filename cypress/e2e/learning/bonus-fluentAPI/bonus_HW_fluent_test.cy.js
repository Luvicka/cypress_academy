import { HomePage } from "../../../page-objects/learning/bonus-fluentAPI/home_page";

describe('Adding Products to Cart', () => {
    it('Adding Bronzer Stick', () => {
      new HomePage()
      .openHomePage()
      .clickBronzerDetail()
      .addBronzerToCart();  
    });     
});