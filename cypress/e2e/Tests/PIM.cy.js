import { before } from "lodash";
import { LoginPage } from "../Pages/Login_Page";
import { PersonalDetails } from "../Pages/PersonalDetailsPage";
const loginPage = new LoginPage();
const PersonalInfo=new PersonalDetails();
beforeEach(function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });
  describe("Login & PIM", function () {
    it("Login_test_01", function () {
      loginPage.InputUsername("Admin");
      loginPage.InputPassword("admin123");
      loginPage.PressLoginButton();
      
      PersonalInfo.NavigatePIM();
      PersonalInfo.InputFullName("Hashara", "Nethmin", "Perera");
      PersonalInfo.InputiD("855655", "445485");
      PersonalInfo.InputLicense("555246");
      PersonalInfo.addStatus();
      PersonalInfo. selectGender();
      

    });
})