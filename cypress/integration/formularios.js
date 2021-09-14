const link = "http://127.0.0.1:8080";

before(() =>{
    cy.visit(link);
})

describe('Pruebas inicio',()=>{
    it('Prueba el nombre', ()=>{
        cy.get('#nombre').should('have.value', 'Ingresa tu nombre')
    })

    it('Chequea los radio button', ()=>{
        cy.get('input[name=comportamiento]').should('have.length', 3)
    })

    it('Chequea el textarea vacio', ()=> {
        cy.get('#carta-regalo').should('have.value', '')
    })

    it('Chequea el mensaje "exito" oculto al inicio.', () => {
        cy.get('#exito').should('have.class', 'oculto')
    })

})

describe('Pruebas errores', () => {
    it('Marca los inputs vacios en rojo?', () => {
        cy.get('#enviar-carta').click();
        cy.get('input').should('have.class', 'error')
    })
})

describe('Errores con datos invalidos?', () => {
    it('Marca el input nombre en rojo?', () => {
        cy.get('#nombre').then(nombreInput => {
            nombreInput.val('');
        })
        cy.get('#nombre').type('Nombre')
        cy.get('#carta-regalo').type('Mensaje Mensaje Mensaje Mensaje Mensaje Mensaje Mensaje Mensaje Mensaje Mensaje Mensaje ')
        cy.get('#enviar-carta').click();
        cy.get('input').should('have.class', 'error')
    })

    it('Marca input descripcion regalo en rojo?', ()=> {
        cy.visit(link);
        cy.get('#nombre').then(nombreInput => {
            nombreInput.val('');
        })
        cy.get('#nombre').type('Nombre Apellido');
        cy.get('select[name=ciudad]').select('Catamarca');
        cy.get('#enviar-carta').click();
        cy.get('#carta-regalo').should('have.class', 'error')
    })

    it('Funciona todo correctamente?', ()=> {
        cy.visit(link);
        cy.get('#nombre').then(nombreInput=> {
            nombreInput.val('');
        })
        cy.get('#nombre').type('Nombre Apellido');
        cy.get('#carta-regalo').type('Mensaje Mensaje Mensaje Mensaje Mensaje Mensaje Mensaje Mensaje Mensaje Mensaje Mensaje ')
        cy.get('select[name=ciudad]').select('Catamarca')
        cy.get('#enviar-carta').click();
        cy.get('#exito').should('not.have.class', 'oculto');
    })


})