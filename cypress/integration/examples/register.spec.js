describe('/register', function () {
    it('fail register', function () {
        cy.visit('http://localhost:8080/auth/register')
        cy.get('[data-cy=input-register-btnregister]').click()
        expect(cy.get('.invalid-feedback').contains('The email field must be a valid email.')).to.be.not.empty
    })
    it('Fail register', function () {
        cy.visit('http://localhost:8080/auth/register')
        cy.url().should('match', /register/)
        cy.get('input[data-cy=input-register-email]').type('admin-3dsinteractive.com').should('have.value', 'admin-3dsinteractive.com')
        cy.get('input[data-cy=input-register-password]').type('gg0641796096').should('have.value', 'gg0641796096')
        cy.get('input[data-cy=input-register-repassword]').type('gg0641796096').should('have.value', 'gg0641796096')
        cy.get('input[data-cy=input-register-firstname]').type('arnon').should('have.value', 'arnon')
        cy.get('input[data-cy=input-register-lastname]').type('kiddee').should('have.value', 'kiddee')
        cy.get('input[data-cy=input-register-phone]').type('0641796096').should('have.value', '0641796096')
        cy.get('[data-cy=input-register-btnregister]').click()
        //expect(cy.get('.invalid-feedback').contains('The email field is required.')).to.be.not.empty

    })
    it('Fail register', function () {
        cy.visit('http://localhost:8080/auth/register')
        cy.url().should('match', /register/)
        cy.get('input[data-cy=input-register-email]').type('admin@3dsinteractive.com').should('have.value', 'admin@3dsinteractive.com')
        cy.get('input[data-cy=input-register-password]').type('gg06417960961515').should('have.value', 'gg06417960961515')
        cy.get('input[data-cy=input-register-repassword]').type('gg06417960961515').should('have.value', 'gg06417960961515')
        cy.get('input[data-cy=input-register-firstname]').type('arnon').should('have.value', 'arnon')
        cy.get('input[data-cy=input-register-lastname]').type('kiddee').should('have.value', 'kiddee')
        cy.get('input[data-cy=input-register-phone]').type('0641796096').should('have.value', '0641796096')
        cy.get('[data-cy=input-register-btn btn-block btn-success]').click()
        expect(cy.get('.invalid-feedback').contains('The password field is required.')).to.be.not.empty

    })
    it('Fail register', function () {
        cy.visit('http://localhost:8080/auth/register')
        cy.url().should('match', /register/)
        cy.get('input[data-cy=input-register-email]').type('admin@3dsinteractive.com').should('have.value', 'admin@3dsinteractive.com')
        cy.get('input[data-cy=input-register-password]').type('gg0641796096').should('have.value', 'gg0641796096')
        cy.get('input[data-cy=input-register-repassword]').type('gg0641796096').should('have.value', 'gg0641796096')
        cy.get('input[data-cy=input-register-firstname]').type('arnon').should('have.value', 'arnon')
        cy.get('input[data-cy=input-register-lastname]').type('kiddee').should('have.value', 'kiddee')
        cy.get('input[data-cy=input-register-phone]').type('123456789').should('have.value', '123456789')
        cy.get('[data-cy=input-register-btn btn-block btn-success]').click()
        //expect(cy.get('.invalid-feedback').contains('The email field is required.')).to.be.not.empty

    })
    it('Fail register', function () {
        cy.visit('http://localhost:8080/auth/register')
        cy.url().should('match', /register/)
        cy.get('input[data-cy=input-register-email]').type('admin@3dsinteractive.com').should('have.value', 'admin@3dsinteractive.com')
        cy.get('input[data-cy=input-register-password]').type('0641796096$').should('have.value', '0641796096$')
        cy.get('input[data-cy=input-register-repassword]').type('0641796096$').should('have.value', '0641796096$')
        cy.get('input[data-cy=input-register-firstname]').type('arnon@#^').should('have.value', 'arnon@#^')
        cy.get('input[data-cy=input-register-lastname]').type('kiddee@#@#').should('have.value', 'kiddee@#@#')
        cy.get('input[data-cy=input-register-phone]').type('0641796096#$#$').should('have.value', '0641796096#$#$')
        cy.get('[data-cy=input-register-btn btn-block btn-success]').click()
        //expect(cy.get('.invalid-feedback').contains('The email field is required.')).to.be.not.empty

    })

    it('successfully register', function () {
        cy.visit('http://localhost:8080/auth/register')
        cy.url().should('match', /register/)
        cy.get('input[data-cy=input-register-email]').type('admin@3dsinteractive.com').should('have.value', 'admin@3dsinteractive.com')
        cy.get('input[data-cy=input-register-password]').type('gg0641796096').should('have.value', 'gg0641796096')
        cy.get('input[data-cy=input-register-repassword]').type('gg0641796096').should('have.value', 'gg0641796096')
        cy.get('input[data-cy=input-register-firstname]').type('arnon').should('have.value', 'arnon')
        cy.get('input[data-cy=input-register-lastname]').type('kiddee').should('have.value', 'kiddee')
        cy.get('input[data-cy=input-register-phone]').type('0641796096').should('have.value', '0641796096')
        cy.get('[data-cy=input-register-btn btn-block btn-success]').click()
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/register')
        })
    })
})

