describe('/login', function () {

    it('fail login', function () {
        cy.visit('http://localhost:8080/auth/login')
        cy.get('[data-cy=input-login-btnlogin]').click()
        expect(cy.get('.invalid-feedback').contains('The email field must be a valid email.')).to.be.not.empty
    })
    it('fail login', function () {
        cy.visit('http://localhost:8080/auth/login')
       cy.url().should('match', /login/)
       cy.get('input[data-cy=input-login-email]').type('admin-3dsinteractive.com').should('have.value', 'admin-3dsinteractive.com')
       cy.get('input[data-cy=input-login-password]').type('55559478').should('have.value', '55559478')
       cy.get('[data-cy=input-login-btnlogin]').click()
       //expect(cy.get('invalid-feedback').contains('The email field must be a valid email')).to.be.not.empty
   })
    
    
     it('fail login', function () {
          cy.visit('http://localhost:8080/auth/login')
         cy.url().should('match', /login/)
         cy.get('input[data-cy=input-login-email]').type('admin@3dsinteractive.com').should('have.value', 'admin@3dsinteractive.com')
         cy.get('input[data-cy=input-login-password]').type('55559478').should('have.value', '555594789')
         cy.get('[data-cy=input-login-btnlogin]').click()
        // expect(cy.get('').contains('')).to.be.not.empty
     })
         it('successfully login', function () {
             cy.visit('http://localhost:8080/auth/login')
             cy.url().should('match', /login/)
             cy.get('input[data-cy=input-login-email]').type('admin@3dsinteractive.com').should('have.value', 'admin@3dsinteractive.com')
             cy.get('input[data-cy=input-login-password]').type('12345678').should('have.value', '12345678')
             cy.get('[data-cy=input-login-btnlogin]').click()
            // cy.location().should((location) => {
               //expect(location.pathname).to.eq('/register')
       })
    // })
})
