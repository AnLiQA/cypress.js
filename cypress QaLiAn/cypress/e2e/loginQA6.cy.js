describe('Автотесты формы логина', function () {
   it('6 проверка на приведение к строчным буквам в логине ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //login
        cy.get('#pass').type('iLoveqastudio1'); //pasword
        cy.get('#loginButton').click(); //enter
        cy.contains('Авторизация прошла успешно').should('be.visible'); //есть "Авторизация прошла успешно""
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') //есть кнопка "Х"
    })
})
