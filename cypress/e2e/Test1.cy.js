/// <reference types="Cypress"/>
it('Google search', ()=>{
    cy.visit('https://google.com/')
    cy.get('#APjFqb').type("Hashara{Enter}")
    // wait 2S after Enter Text
    cy.wait(2000)
    cy.contains('Maps').click()

})