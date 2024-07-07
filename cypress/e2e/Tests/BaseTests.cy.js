import { before } from "lodash";
import { LoginPage } from "../Pages/Login_Page";

const loginPage = new LoginPage();
beforeEach(function () {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});
describe("All_login_Tests", function () {
  it("Login_test_01", function () {
    loginPage.InputUsername("Admin");
    loginPage.InputPassword("admin123");
    loginPage.PressLoginButton();
    cy.get(".oxd-userdropdown-name").click();
  });

  it("Login_test_02", function () {
    loginPage.InputUsername("Admin85");
    loginPage.InputPassword("admin123");
    loginPage.PressLoginButton();
    cy.get(".oxd-userdropdown-name").click();
  });
  it("Login_test_02", function () {
    loginPage.InputUsername("Admin");
    loginPage.InputPassword("admin1253");
    loginPage.PressLoginButton();
    cy.get(".oxd-userdropdown-name").click();
  });
});
