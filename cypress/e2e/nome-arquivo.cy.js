import commands from '../support/commands'

describe('transações', () => {
    beforeEach(() => {
        cy.acessaDevFinances()
    })

    it('Excluindo uma transação', () => {

        cy.get('#transaction > .button').click()
        cy.get('#form > h2').contains('Nova Transação')

        cy.get('#description').type('Primeira Transação')
        cy.get('#amount').type('200.00')
        cy.get('#date').type('2023-10-12')
        cy.get('button').contains('Salvar').click()
        cy.get(':nth-child(4) > img').click()

        //cy.get('tr').eq(1).should('contain', 'Primeira Transação').find('img').click()
        //cy.contains('description', 'Primeira Transação').parent().fiund('img').click()
    })
})