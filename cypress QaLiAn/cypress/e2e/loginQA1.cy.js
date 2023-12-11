describe('Автотесты формы логина', function () {
   it('1 проверка на позитивный кейс авторизации ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); //login
        cy.get('#pass').type('iLoveqastudio1'); //pasword
        cy.get('#loginButton').click(); //enter
        cy.contains('Авторизация прошла успешно').should('be.visible'); //есть "Авторизация прошла успешно""
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') //есть кнопка "Х"
    })
})
