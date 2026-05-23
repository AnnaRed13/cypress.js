import * as data from "../helpers/default_data.json"
describe('Проверка забытого пароля', function () {

    beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get('.space-y-4 > :nth-child(1) > .items-center').should('be.visible');
         cy.get('.space-y-4 > :nth-child(1) > .items-center').contains('Email');
         cy.get('.justify-between > .flex').should('be.visible');
         cy.get('.justify-between > .flex').contains('Пароль');
           });


it('forgot password', function () {
    cy.get('.justify-between > .text-xs').should('be.visible');
    cy.get('.inline-flex').should('be.visible');
    cy.get('.justify-between > .text-xs').contains('Забыли пароль?');
    cy.get('.justify-between > .text-xs').click();
});

it('recovering password', function () {
    cy.visit('https://hiiire.com/forgot-password');
    cy.get('.space-y-4 > .space-y-2 > .items-center').should('be.visible');
    cy.get('.space-y-4 > .space-y-2 > .items-center').contains('Email');
    cy.get('#email').type(data.login);
    cy.get('.inline-flex').click();
    cy.wait(5000)
    cy.get('.relative > .text-sm').should('be.visible');
    cy.get('.relative > .text-sm').contains('Если аккаунт существует, мы отправили ссылку для восстановления пароля на ti***@ma***.com.');
});
          })
      