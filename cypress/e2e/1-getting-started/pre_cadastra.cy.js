/// <reference types="cypress" />

const { fakerDE: faker, fa } = require('@faker-js/faker');

beforeEach(()=>{
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
})

describe('Funcionalidade pré cadastro', () => {
    it('Deve completar o pré cadastro com Sucesso', () =>{
        cy.get('#reg_email').type(faker.internet.email());
        cy.get('#reg_password').type(faker.internet.password());
        cy.get(':nth-child(4) > .button').click();

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
        cy.get('#account_first_name').type(faker.person.firstName());
        cy.get('#account_last_name').type(faker.person.lastName());
        cy.get('.woocommerce-Button').click();

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.');


    });
});