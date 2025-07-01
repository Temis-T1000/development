class MyInfoPage {
    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input",
            dateField: ".oxd-date-input",
            genericComboBox: ".oxd-select-text--active",
            secondeItemComboBox: ".oxd-select-dropdown > :nth-child(36)",
            thirdiItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
            dateBirthday: ".oxd-input--active",
            radioOption: ".oxd-radio-wrapper",
            buttonSaveSubmit: "[type='submit']",       
            bloodItemComboBox: ".oxd-select-dropdown > :nth-child(2)"
        }
        return selectors;
    }
        accessMyInfoPage() {
            cy.get(this.selectorsList().myInfoButton).click()
            cy.get(this.selectorsList().firstNameField).clear().type('Firstname Test')
            cy.get(this.selectorsList().middleNameField).clear().type('Middle Test')
            cy.get(this.selectorsList().lastNameField).clear().type('Lastname Test')
            cy.get(this.selectorsList().genericField).eq(4).clear().type('Empl-Test')
            cy.get(this.selectorsList().genericField).eq(5).clear().type('Other Test')
            cy.get(this.selectorsList().genericField).eq(6).clear().type('Drivers Number Test')
            cy.get(this.selectorsList().dateField).eq(0).clear().type('2025-03-10')  
            cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true})
            cy.get(this.selectorsList().secondeItemComboBox).click()
            cy.get(this.selectorsList().genericComboBox).eq(1).click({force: true})
            cy.get(this.selectorsList().thirdiItemComboBox).click()
            cy.get(this.selectorsList().dateBirthday).eq(8).clear().type('1988-28-06')
            cy.get('.--close').click()
            cy.get(this.selectorsList().radioOption).eq(1).click()    
            cy.get(this.selectorsList().buttonSaveSubmit).eq(0).click({force: true})

            
            cy.get(this.selectorsList().genericComboBox).eq(2).click({force: true})
            cy.get(this.selectorsList().bloodItemComboBox).click()
            cy.get(this.selectorsList().genericField).eq(9).clear().type('TestField')
            cy.get(this.selectorsList().buttonSaveSubmit).eq(1).click({force: true})
    }
        accessBodyContain() {
            cy.get('body').should('contain', 'Successfully Updated')
        }
}

 export default MyInfoPage;