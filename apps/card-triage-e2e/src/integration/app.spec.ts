import { getCardColumns, getCards, getSearchInput } from '../support/app.po';

describe('card-triage', () => {
    beforeEach(() => cy.visit('/'));

    it('displays both cards columns', () => {
        getCardColumns().should('have.length', 2);
    });

    it('displays "Todo" column', () => {
        getCardColumns()
            .first()
            .get('.card-column-title')
            .contains('Todo');
    });

    it('displays "Done" column', () => {
        getCardColumns()
            .eq(1)
            .get('.card-column-title')
            .contains('Done');
    });

    it('filters cards accordingly', () => {
        getSearchInput().type('aus');

        cy.wait(1000);

        getCards().each(card => {
            cy.wrap(card)
                .find('.badge')
                .contains('Pause');
        });
    });
});
