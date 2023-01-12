describe('Test Container', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })

    it('testing the test container funtionality', ()=>{
        expect(true).to.equal(true)
    })

    //Getting elements
    const nameInput=()=>cy.get('input[name=username]')

    const sizeInput=()=>cy.get('select')

    const specialInput=()=>cy.get('input[name=specialInstructions]')

    const pepperoniInput=()=>cy.get('input[name=pepperoni]')

    const greenPepperInput=()=>cy.get('input[name=greenPepper]')

    const black0livesInput=()=>cy.get('input[name=blackOlives]')

    const pineappleInput=()=>cy.get('input[name=pineapple]')

    const submitBttn=()=>cy.get(`button[id="order-button"]`)

    describe('testing inputs, checkboxs, and submit',()=>{

        it('can write inside name input', ()=>{
            nameInput()
            .type('Rafaela Sarai Serrano-Plata')
            .should('have.value','Rafaela Sarai Serrano-Plata')
        })

        it('can select a size',()=>{
            sizeInput()
            .select('small')
            .invoke('val')
            .should('eq', 'small')
        })

        it('can write inside specail instruction',()=>{
            specialInput()
            .type('Red Sauce')
            .should('have.value','Red Sauce')
        })

        it('testing if more than one checkbox can be check',()=>{
            pepperoniInput().check().should('be.checked')
            greenPepperInput().check().should('be.checked')
            black0livesInput().check().should('be.checked')
            pineappleInput().check().should('be.checked')
        })

        it('can submit a form using submit button',()=>{
            nameInput()
            .type('Rafaela Sarai Serrano-Plata')
            sizeInput()
            .select('small')
            .invoke('val')
            specialInput()
            .type('Red Sauce')
            pepperoniInput().check().should('be.checked')
            greenPepperInput().check().should('be.checked')
            black0livesInput().check().should('be.checked')
            pineappleInput().check().should('be.checked')
            submitBttn()
            .click()
            .should('not.be.disabled')
            cy.contains('Rafaela Sarai Serrano-Plata')
        })

        it('can submit a second form using submit button',()=>{
            nameInput()
            .type('Rafaela Sarai Serrano-Plata')
            sizeInput()
            .select('small')
            .invoke('val')
            specialInput()
            .type('Red Sauce')
            pepperoniInput().check().should('be.checked')
            greenPepperInput().check().should('be.checked')
            black0livesInput().check().should('be.checked')
            pineappleInput().check().should('be.checked')
            submitBttn()
            .click()
            .should('not.be.disabled')
            cy.contains('Rafaela Sarai Serrano-Plata')
            
            nameInput()
            .type('Samantha')
            sizeInput()
            .select('medium')
            .invoke('val')
            specialInput()
            .type('White Sauce')
            pepperoniInput().check().should('be.checked')
            greenPepperInput().check().should('be.checked')
            black0livesInput().check().should('be.checked')
            pineappleInput().check().should('be.checked')
            submitBttn()
            .click()
            .should('not.be.disabled')
            cy.contains('Samantha')
        })
    })

} )