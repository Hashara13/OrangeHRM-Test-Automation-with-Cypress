export class LoginPage {
username_Input= ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
password_Input= ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
login_button=".oxd-button"
 
  InputUsername(username) {
    cy.get(this.username_Input).type(username);
  }
  InputPassword(password) {
    cy.get(this.password_Input).type(password);
  }
  PressLoginButton() {
    cy.get(this.login_button).click();
  }
}
