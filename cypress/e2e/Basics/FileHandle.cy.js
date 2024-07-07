/// <reference types="Cypress"/>

before(function(){
    cy.fixture('example.json').as('test_data')
})

it('FileRead', function() {
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })
    cy.log(this.test_data.email)
})

it('FileRead_02', function() {
    cy.readFile('cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })
})

it('Write', function() {
    cy.writeFile('cypress/fixtures/One.txt', "This is Text One")
    cy.readFile('cypress/fixtures/One.txt').should('contain', "This is Text One")
    cy.writeFile('cypress/fixtures/One.txt', "\nThis is Text Two", { flag: 'a+' })
})
