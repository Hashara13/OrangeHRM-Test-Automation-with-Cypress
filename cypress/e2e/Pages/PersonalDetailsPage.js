export class PersonalDetails {
    MyInfo_Button= ':nth-child(6) > .oxd-main-menu-item > .oxd-text'
    personalDetails_Button= ':nth-child(1) > .orangehrm-tabs-item'
    firstName='.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'
    middleName=':nth-child(2) > :nth-child(2) > .oxd-input'
    lastName=':nth-child(3) > :nth-child(2) > .oxd-input'
    employeeId=':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    otherId=':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    LicenseNumber=':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    calenderInput=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'
    nationality=':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    civilStatus=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'
    maleLabel=':nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > input'
    femaleLabel=':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > input'

      NavigatePIM() {
        cy.get(this.MyInfo_Button).click();
        cy.get(this.personalDetails_Button).click();
      }
      InputFullName(First_name, Middle_name, Last_name) {
        cy.get(this.firstName).type(First_name);
        cy.get(this.middleName).type(Middle_name);
        cy.get(this.lastName).type(Last_name);
      }
      InputLicense(License_Number) {
        cy.get(this.LicenseNumber).type(License_Number);
      }
      addStatus() {
        cy.get(this.nationality).click();
        cy.get(this.civilStatus).click();
      }
      selectGender() {
        cy.get(this.maleLabel).should('be.checked')
        cy.get(this.femaleLabel).should('not.be.checked');
        cy.get(this.femaleLabel).should('be.checked')
        cy.get(this.maleLabel).should('not.be.checked');
      }
    }
    