/// <reference types="cypress" />

    describe('Teste do sistema de login', () => {
        
        beforeEach(() => {
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')           
        });

        afterEach(() => {
            cy.screenshot()
        });

        it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('lolo@gmail.com')
        cy.get('#password').type('lolo123&')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, lolo (não é lolo? Sair)')
        })

        it('Login com email inválido', () => {
        
            cy.get('#username').type('lol@gmail.com')
            cy.get('#password').type('lolo123&')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
                
            })

        it('Login com senha inválida', () => {

            cy.get('#username').type('lolo@gmail.com')
            cy.get('#password').type('lol123&')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-error').should('exist')
            
        });

    })