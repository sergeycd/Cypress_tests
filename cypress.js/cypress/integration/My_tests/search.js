describe('Тестирование поиска Google', function () {
    
    it('Ищу hh через Google', function () {
        cy.visit('https://www.google.ru/');
        cy.get('.gLFyf').type('hh');
        cy.get('.CqAVzb > center > .gNO89b').click()
        cy.get('[href="https://hh.ru/"] > .LC20lb').click()
        })
})
