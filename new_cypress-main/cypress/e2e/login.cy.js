describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio//');
         cy.get('#mail').type('german@dolnikov.ru')  // найти поле логин и ввести верный логин
         cy.get('#pass').type('iLoveqastudio1')  // найти поле пароль и ввести верный пароль
         cy.get('#loginButton').click(); // нажала войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователей

   
        })
        it('Восстановление пароля', function () {
            cy.visit('https://login.qa.studio//');
            cy.get('#forgotEmailButton').click(); //найти кнопку "забыли пароль" и нажать на нее
            cy.get('#mailForgot').type('german@dolnikov.ru') // найти поле логин и ввести верный логин
            cy.get('#restoreEmailButton').click(); // нажала "отправить код"
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю что поле нажатия вижу текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible') // есть крестик и он виден пользователю
   
      
           })  
           it('Верный логин и НЕверный пароль', function () {
            cy.visit('https://login.qa.studio//');
            cy.get('#mail').type('german@dolnikov.ru')  // найти поле логин и ввести верный логин
            cy.get('#pass').type('iLoveqastudio2')  // найти поле пароль и ввести неверный пароль
            cy.get('#loginButton').click(); // нажала войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователей
   
      
           })        
           it('НЕверный логин и верный пароль', function () {
            cy.visit('https://login.qa.studio//');
            cy.get('#mail').type('alexey@dolnikov.ru')  // найти поле логин и ввести НЕверный логин
            cy.get('#pass').type('iLoveqastudio1')  // найти поле пароль и ввести верный пароль
            cy.get('#loginButton').click(); // нажала войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователей
   
      
           })  
           it('Ввести логин без @', function () {
            cy.visit('https://login.qa.studio//');
            cy.get('#mail').type('germandolnikov.ru')  // найти поле логин и ввести логин без @
            cy.get('#pass').type('iLoveqastudio1')  // найти поле пароль и ввести верный пароль
            cy.get('#loginButton').click(); // нажала войти
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователей
   
      
           })  
           it('Проверка на привидение к строчным буквам', function () {
            cy.visit('https://login.qa.studio//');
            cy.get('#mail').type('GerMan@Dolnikov.ru')  // найти поле логин и ввести логин с заглавными буквами
            cy.get('#pass').type('iLoveqastudio1')  // найти поле пароль и ввести верный пароль
            cy.get('#loginButton').click(); // нажала войти
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователей


 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 