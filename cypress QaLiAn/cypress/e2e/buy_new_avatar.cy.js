describe('Покупка аватара', function () {
   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('mail'); // ввести свою почту вместо mail 
        cy.get('#password').type('pasword'); // ввести свой пароль вместо pasword
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); //вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224'); //вводим срок действия
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //вводим код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Andrey Li'); //вводим свои имя фамилию
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456'); //вводим код смс
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
    })

})

