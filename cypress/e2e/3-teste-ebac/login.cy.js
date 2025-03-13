/// <reference types="cypress" />

    describe('Teste do sistema de login', () => {
        it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('lolo@gmail.com')
        cy.get('#password').type('lolo123&')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lolo (não é lolo? Sair)')

        })
    })