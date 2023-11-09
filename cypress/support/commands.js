// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('acessaDevFinances', () => {
    cy.visit('https://devfinance-agilizei.netlify.app/')
    cy.get('header > img').should('be.visible')
})

Cypress.Commands.add('adicionTransacao', (descricao, valor, data) => {
    cy.get('#transaction > .button').click()
    cy.get('#form > h2').contains('Nova Transação')

    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type(data)
    cy.get('button').contains('Salvar').click()
})