describe('User Registration Functionality', () => {
    
    it('TC01 - Valid Registration', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('.right_list_fix > li:nth-child(2) > a:nth-child(1)').click()
        cy.get('.account_form > h3:nth-child(1)').should('be.visible').and('exist')
        cy.get('#user').type('Jon Snow')
        cy.get('#email').type('jonsnow_example@yahoo.com')
        cy.get('#password').type('SenhaForte#123')
        cy.get('#btnRegister').click()
        cy.get('#swal2-title').should('be.visible').and('exist')
        cy.get('.swal2-confirm').click()
    }) 

    it('TC02 - Invalid Registration With Empty Name', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('.right_list_fix > li:nth-child(2) > a:nth-child(1)').click()
        cy.get('.account_form > h3:nth-child(1)').should('be.visible').and('exist')
        cy.get('#email').type('jonsnow_example@yahoo.com')
        cy.get('#password').type('SenhaForte#123')
        cy.get('#btnRegister').click()
        cy.get('div.default-form-box:nth-child(2) > span:nth-child(3)').should('contain', 'O campo nome deve ser prenchido')
    }) 
    
    it('TC03 - Invalid Registration With Empty E-mail', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('.right_list_fix > li:nth-child(2) > a:nth-child(1)').click()
        cy.get('.account_form > h3:nth-child(1)').should('be.visible').and('exist')
        cy.get('#user').type('Jon Snow')
        cy.get('#password').type('SenhaForte#123')
        cy.get('#btnRegister').click()
        cy.get('div.default-form-box:nth-child(3) > span:nth-child(3)').should('contain', 'O campo e-mail deve ser prenchido corretamente')
    }) 

    it('TC04 - Invalid Registration With Empty Password', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('.right_list_fix > li:nth-child(2) > a:nth-child(1)').click()
        cy.get('.account_form > h3:nth-child(1)').should('be.visible').and('exist')
        cy.get('#user').type('Jon Snow')
        cy.get('#email').type('jonsnow_example@yahoo.com')
        cy.get('#btnRegister').click()
        cy.get('#errorMessageFirstName').should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    }) 

})
