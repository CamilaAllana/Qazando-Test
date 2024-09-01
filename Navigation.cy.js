describe('Navigation Functionality', () => {
    
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

    it('TC01 - Wishlist - Negative', () => {
        cy.get('.col-lg-2 > div:nth-child(1) > ul:nth-child(2) > li:nth-child(6) > a:nth-child(1)').click() 
        cy.get('.empaty_cart_area').should('contain', 'YOUR WISHLIST IS EMPTY')    
    })

    it('TC02 - Shopping Cart - Negative', () => {
        cy.get('.col-lg-2 > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)').click() 
        cy.get('.empaty_cart_area > h2:nth-child(2)').should('contain', 'YOUR CART IS EMPTY')    
    })

    it('TC03 - Social Media (Facebook) - Negative', () => {
        cy.get('.footer_left_side_icon > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)').click()
        cy.url().should('eq', 'https://www.facebook.com/qazando')
    })

    it('TC04 - Social Media (Twitter) - Negative', () => {
        cy.get('.footer_left_side_icon > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click()
        cy.url().should('eq', 'https://www.twitter.com/qazando')
    })

    it('TC05 - Social Media (Linkedin) - Negative', () => {
        cy.get('.footer_left_side_icon > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)').click()
        cy.url().should('eq', 'https://www.linkedin.com/qazando')
    })

    it('TC06 - Social Media (Instagram) - Negative', () => {
        cy.get('.footer_left_side_icon > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)').click()
        cy.url().should('eq', 'https://www.instagram.com/qazando')
    })

    it('TC07 - Social Media (Google) - Negative', () => {
        cy.get('.footer_left_side_icon > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)').click()
        cy.url().should('eq', 'https://www.google.com/qazando')
    })

    it('TC08 - Menu Pages', () => {
        cy.get('div.main-menu.menu-color--black.menu-hover-color--golden.d-none.d-xl-block')
        .invoke('removeClass', 'd-none')
        cy.get('header.header-section.d-none.d-xl-block')
        .invoke('removeClass', 'd-none')
        cy.get('li.has-dropdown:nth-child(3) > a:nth-child(1)').click({ force: true })
        cy.get('#item1').contains('About Us').click({ force: true })
        cy.url().should('include', '/about')
    })

    it('TC09 - Menu Shop', () => {
        cy.get('div.main-menu.menu-color--black.menu-hover-color--golden.d-none.d-xl-block')
        .invoke('removeClass', 'd-none')
        cy.get('header.header-section.d-none.d-xl-block')
        .invoke('removeClass', 'd-none')
        cy.get('li.has-dropdown:nth-child(2) > a:nth-child(1)').click({ force: true })
        cy.get('li.mega-menu-item:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)')
        .contains('Shop Left Sidebar').click({ force: true })
        cy.url().should('include', '/shop-left-bar')
    })
     
    it('TC10 - Menu Home', () => {
        cy.get('div.main-menu.menu-color--black.menu-hover-color--golden.d-none.d-xl-block')
        .invoke('removeClass', 'd-none')
        cy.get('header.header-section.d-none.d-xl-block')
        .invoke('removeClass', 'd-none')
        cy.get('li.has-dropdown:nth-child(1) > a:nth-child(1)').click({ force: true })
        cy.get('#item0').contains('Electronics').click({ force: true })
        cy.url().should('include', '/electronics')
    })


})