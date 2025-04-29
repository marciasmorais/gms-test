///<reference types="cypress" />

describe('US-012-Funcionalidade cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Fulano')
    cy.get('#signup-lastname').type('de Tal')
    cy.get('#signup-email').type('fulano3@detal.com')
    cy.get('#signup-password').type('123456@A')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})