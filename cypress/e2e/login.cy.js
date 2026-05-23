import * as data from "../helpers/default_data.json"
describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get('.space-y-4 > :nth-child(1) > .items-center').should('be.visible');
         cy.get('.space-y-4 > :nth-child(1) > .items-center').contains('Email');
         cy.get('.justify-between > .flex').should('be.visible');
         cy.get('.justify-between > .flex').contains('Пароль');
           });

it('correct password', function () {
        cy.get('#email').type(data.login);
        cy.get('#password').type(data.password);
        cy.get('.bg-primary').click();

        cy.get('.flex.items-center > .flex > .inline-flex').should('be.visible');
        cy.get('.text-3xl').should('be.visible');
        cy.get('.text-3xl').contains('Главная');
        cy.get('.flex.items-center > :nth-child(1) > .text-muted-foreground').should('be.visible');
        cy.get('.flex.items-center > :nth-child(1) > .text-muted-foreground').contains('Обзор вашей активности по подбору персонала');
        })

it('incorrect login', function () {

    cy.get('#email').type('tifemi1381@marineso1.co');
    cy.get('#password').type(data.password);
    cy.get('.bg-primary').click();
    cy.get('.rounded-lg > .text-sm').should('be.visible');
    cy.get('.rounded-lg > .text-sm').contains('Неверный email или пароль');
});

it('incorrect password', function () {

    cy.get('#email').type(data.login);
    cy.get('#password').type('marina');
    cy.get('.bg-primary').click();
    cy.get('.rounded-lg > .text-sm').should('be.visible');
    cy.get('.rounded-lg > .text-sm').contains('Неверный email или пароль');
});

          })
      