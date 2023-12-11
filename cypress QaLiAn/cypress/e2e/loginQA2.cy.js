describe('Автотесты формы логина', function () {
   it('2 автотест на проверку логики восстановления пароля ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click(); //Нажать «Забыли пароль»
        cy.get('#mailForgot').type('1german@dolnikov.ru'); //  Ввести имейл "1german@dolnikov.ru"
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible'); //есть "Успешно отправили пароль на e-mail"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') //есть кнопка "Х"
    })
})
