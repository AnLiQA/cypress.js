describe('Автотесты формы логина', function () {
   it('3 проверка на негативный кейс авторизации, не правильный логин ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('1german@dolnikov.ru'); //login
        cy.get('#pass').type('iLoveqastudio1'); //pasword
        cy.get('#loginButton').click(); //enter
        cy.contains('Такого логина или пароля нет').should('be.visible'); //есть "Такого логина или пароля нет"
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') //есть кнопка "Х"
    })
})
