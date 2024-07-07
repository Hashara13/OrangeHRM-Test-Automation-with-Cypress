describe('Assertion Operation', () => {
    it('Assertion', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('get').click()
      cy.get('#query-btn')

      // implicit(built-in)
      .should('contain','Button')
      // check all classes with '#query-btn'
      .should('have.class','query-btn')
       // check enabled, visible '#query-btn'
      .should('be.visible')
      // and follow should assertion
      .and('be.enabled')

      // explicit check 
      expect(true).to.be.true
      assert.equal(4,'4','Not Equal')

    })
  })