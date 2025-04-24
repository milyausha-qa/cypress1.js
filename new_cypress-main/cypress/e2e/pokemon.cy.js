describe('Покупка аватара', function () {

    it('Покупка аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/'); // перехожу на сайт покемонов
         cy.get('#k_email').type('milyausha.nazyrova@yandex.ru') //найти поле почта и ввести верную почту
         cy.get('#k_password').type('Qwerty2307@') //найти поле пароль и ввести верный пароль
         cy.get('.MuiButton-root').click(); // нажать кнопку "ВОЙТИ"
         cy.wait (2000)
         cy.get('.header_card_trainer').click(); // нажать на своего тренера
         cy.wait (2000)
         cy.get('.k_mobile > :nth-child(5)').click(); // нажать на кнопку смена аватара
         cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4444333322221111') // вводим номер карты
         cy.get(':nth-child(1) > .style_1_base_input').type('1234') // вводим срок
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125') // вводим cvv
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('MILYAUSHA NAZYROVA') //вводим имя
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем кнопку оплатить
         cy.get('.style_1_base_input').type('56456') // вводим код подтверждения из смс
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // нажимаем кнопку оплатить
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно').should('be.visible'); //проверяем наличие и видимость сообщения


     })
 }) 