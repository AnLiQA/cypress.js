describe('Автотесты формы логина', function () {
   it('5 проверка на негативный кейс валидации ', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru'); //login
        cy.get('#pass').type('iLoveqastudio1'); //pasword
        cy.get('#loginButton').click(); //enter
        cy.contains('Нужно исправить проблему валидации').should('be.visible'); //есть "Нужно исправить проблему валидации"      
    })
})
