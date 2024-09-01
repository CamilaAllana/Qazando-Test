describe('Purchase Functionality', () => {
    
    beforeEach(   ()  => {
        cy.visit('https://automationpratice.com.br/')
        cy.get('.right_list_fix > li:nth-child(1) > a:nth-child(1)').click()
        cy.get('.account_form > h3:nth-child(1)').should('be.visible').and('exist')
        cy.get('#user').type('jonsnow_example@yahoo.com')
        cy.get('#password').type('SenhaForte#123')
        cy.get('#btnLogin').click()
        cy.get('#swal2-title').should('be.visible').and('exist')
        cy.get('.swal2-confirm').click()
    })

    it('TC01 - Add Items to Shopping Cart', () => {
       cy.get('li.has-dropdown:nth-child(2) > a:nth-child(1)').click({ force: true })
       cy.get('li.mega-menu-item:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)').click({ force: true }) 
       cy.get('div.col-md-4:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(4)').click({ force: true }) 
       cy.get('div.col-lg-4:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(4)').click({ force: true })
       cy.get('div.col-lg-4:nth-child(3) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > img:nth-child(2)').click({ force: true })
       cy.get('.modal_product_content_one > h3:nth-child(1)').should('contain', 'V-Neck Dress')
       cy.get('.customs_sel_box').type('m{enter}')
       cy.get('a.theme-btn-one:nth-child(2)').click()
       cy.get('ul.header-action-link:nth-child(3) > li:nth-child(2) > a:nth-child(1)').click({ force: true })
       cy.get('li.offcanvas-wishlist-item-single:nth-child(6) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)').should('contain', 'V-Neck Dress')       
    })

    it('TC02 - Remove Items from Shopping Cart', () => {
        cy.get('li.has-dropdown:nth-child(2) > a:nth-child(1)').click({ force: true })
        cy.get('li.mega-menu-item:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').click({ force: true }) 
        cy.get('.table_page > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(6) > a:nth-child(1) > i:nth-child(1)').click({ force: true })
        cy.get('.table_page > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(6) > a:nth-child(1) > i:nth-child(1)').click({ force: true })   
        cy.get('ul.header-action-link:nth-child(3) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)').should('contain', '1')    
    })

    it('TC03 - Purchase Checkout (Without Billing Information) ', () => {
        cy.get('li.has-dropdown:nth-child(2) > a:nth-child(1)').click({ force: true })
        cy.get('li.mega-menu-item:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').click({ force: true }) 
        cy.get('.table_page > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(6) > a:nth-child(1) > i:nth-child(1)').click()
        cy.get('.table_page > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(6) > a:nth-child(1) > i:nth-child(1)').click()   
        cy.get('a.btn_sm').click()
        // Place order without billing information
        cy.get('div.order_review:nth-child(2) > button:nth-child(3)').click()
        cy.get('#errorMessageFirstName').should('contain', 'Preencha os dados de pagamento!')
    })

    it('TC04 - Purchase Checkout ', () => {
        cy.get('li.has-dropdown:nth-child(2) > a:nth-child(1)').click({ force: true })
        cy.get('li.mega-menu-item:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').click({ force: true }) 
        cy.get('.table_page > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(6) > a:nth-child(1) > i:nth-child(1)').click({ force: true })
        cy.get('.table_page > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(6) > a:nth-child(1) > i:nth-child(1)').click({ force: true })   
        cy.get('a.btn_sm').click()
        cy.get('#fname').type('Jon')
        cy.get('#lname').type('Snow')
        cy.get('#cname').type('Winterfell SA')
        cy.get('#email').type('jonsnow_example@yahoo.com')
        cy.get('#country').type('a{enter}')
        cy.get('#city').type('a{enter}')
        cy.get('#zip').type('12345-000')
        cy.get('#faddress').type('Street,123')
        cy.get('#messages').type('nnnnn')
        cy.get('.checkout-area-bg > button:nth-child(3)').click()
        cy.get('div.check-out-form:nth-child(2) > h3:nth-child(1)').should('contain', 'Billings Information registred with success!')
        cy.get('button.theme-btn-one:nth-child(3)').click()
        cy.get('.offer_modal_left > h2:nth-child(2)').should('contain', 'Order success!')
    })


})