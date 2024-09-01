describe('Login Functionality', () => {
    
    it('TC01 - Login With Valid Credentials', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('.right_list_fix > li:nth-child(1) > a:nth-child(1)').click()
        cy.get('.account_form > h3:nth-child(1)').should('be.visible').and('exist')
        cy.get('#user').type('jonsnow_example@yahoo.com')
        cy.get('#password').type('SenhaForte#123')
        cy.get('#btnLogin').click()
        cy.get('#swal2-title').should('be.visible').and('exist')
        cy.get('.swal2-confirm').click()
    })

    it('TC02 - Login With Invalid Credentials - Negative', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('.right_list_fix > li:nth-child(1) > a:nth-child(1)').click()
        cy.get('.account_form > h3:nth-child(1)').should('be.visible').and('exist')
        cy.get('#user').type('jonsnow@example.com')
        cy.get('#password').type('Senha#123')
        cy.get('#btnLogin').click()
        cy.get('#swal2-title').should('contain', 'Login não efetuado')
    })

    it('TC03 - Login With Invalid Username', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('.right_list_fix > li:nth-child(1) > a:nth-child(1)').click()
        cy.get('.account_form > h3:nth-child(1)').should('be.visible').and('exist')
        cy.get('#user').type('Jon')
        cy.get('#password').type('SenhaForte#123')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('contain', 'E-mail inválido.')
    })

    it('TC04 - Login With Invalid Password - Negative', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('.right_list_fix > li:nth-child(1) > a:nth-child(1)').click()
        cy.get('.account_form > h3:nth-child(1)').should('be.visible').and('exist')
        cy.get('#user').type('jonsnow_example@yahoo.com')
        cy.get('#password').type('InvalidPassword')
        cy.get('#btnLogin').click()
        cy.get('.invalid_input').should('contain', 'Senha inválida.')
    })

    it('TC05 - Login With Empty Fields', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('.right_list_fix > li:nth-child(1) > a:nth-child(1)').click()
        cy.get('.account_form > h3:nth-child(1)').should('be.visible').and('exist')
        cy.get('#user').clear()
        cy.get('#password').clear()
        cy.get('#btnLogin').click()
        cy.get('div.default-form-box:nth-child(2) > span:nth-child(3)').should('contain', 'E-mail inválido.')
        //cy.get('div.default-form-box:nth-child(3) > span:nth-child(3)').should('contain', 'Senha inválida.')
    })

    it('TC06 - Login With Empty Username', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('.right_list_fix > li:nth-child(1) > a:nth-child(1)').click()
        cy.get('.account_form > h3:nth-child(1)').should('be.visible').and('exist')
        cy.get('#user').clear()
        cy.get('#password').type('SenhaForte#123')
        cy.get('#btnLogin').click()
        cy.get('div.default-form-box:nth-child(2) > span:nth-child(3)').should('contain', 'E-mail inválido.')
    })

    it('TC07 - Login With Empty Password', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('.right_list_fix > li:nth-child(1) > a:nth-child(1)').click()
        cy.get('.account_form > h3:nth-child(1)').should('be.visible').and('exist')
        cy.get('#user').type('jonsnow_example@yahoo.com')
        cy.get('#password').clear()
        cy.get('#btnLogin').click()
        cy.get('div.default-form-box:nth-child(3) > span:nth-child(3)').should('contain', 'Senha inválida.')
    })

})