/// <reference types="cypress" />

describe('Teste da tela de produtos', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('Deve encontrar um produto e acessar a sua página', () => {
        cy.get('.product-block').eq(3)
            .click()
        cy.get('.tabs')
            .should('contain', 'Descrição')
        
    });
});