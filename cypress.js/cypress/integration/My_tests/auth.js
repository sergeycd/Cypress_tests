describe('Автотесты для формы логина и пароля', function () {

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('koster@gmail.com');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitRestoreButton > img');
            })



    it('Проверка позитивного кейса авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > img');
            })

    it('Проверка негативного кейса авторизации (неверный пароль)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio');
       cy.get('#loginButton').click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > img');
            })

    it('Проверка негативного кейса авторизации (неверный логин)', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@mail.ru');
        cy.get('#pass').type('iLoveqastudio1');
       cy.get('#loginButton').click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > img');
            })
    })