class MyInfoPage {
    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            firstNameField: "[name='firstName']", // 1 firstName
            middleNameField: "[name='middleName']", // 2 middleName
            lastNameField: "[name='lastName']", // 3 lastName
            genericField: ".oxd-input", // 4 / 5 / 6 / 9 / 13
            dateField: ".oxd-date-input", // Employee id eq(4) / Other id eq(5)/ drives license number eq(6)
            genericComboBox: ".oxd-select-text--active", // 8 / 9 /12
            nationality: ".oxd-select-dropdown > :nth-child(36)", // 8 - nationality
            maritalStatus: ".oxd-select-dropdown > :nth-child(3)", //9 - marital Status
            dateBirthday: ".oxd-input--active", // 10 - birthday
            radioOption: ".oxd-radio-wrapper", // 11 - gender (gênero)
            buttonSaveSubmit: "[type='submit']",   // button save 1,2    
            bloodItemComboBox: ".oxd-select-dropdown > :nth-child(2)" // 12 - blood type
        }
        return selectors;
    }
            accessMyInfoPage() {
            cy.get(this.selectorsList().myInfoButton).click()
            cy.get(this.selectorsList().firstNameField).clear().type('Firstname Test') // 1 - firstname
            cy.get(this.selectorsList().middleNameField).clear().type('Middle Test') // 2 - middlename
            cy.get(this.selectorsList().lastNameField).clear().type('Lastname Test') // 3 - lastname

            cy.get(this.selectorsList().genericField).eq(4).clear().type('Empl-Test') // 4 - employee id
            cy.get(this.selectorsList().genericField).eq(5).clear().type('Other Test') // 5 - other id
            cy.get(this.selectorsList().genericField).eq(6).clear().type('Drivers Number Test') //6 - drivers number
            cy.get(this.selectorsList().dateField).eq(0).clear().type('2025-03-10')  // 7- license expire date
            cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true}) //8 - array: 0 - nationality
            cy.get(this.selectorsList().nationality).click() // 8 - nationality click
            cy.get(this.selectorsList().genericComboBox).eq(1).click({force: true}) //9 - array: 1 - marital status
            cy.get(this.selectorsList().maritalStatus).click() // 9 - marital status click
            cy.get(this.selectorsList().dateBirthday).eq(8).clear().type('1988-28-06') // 10 -  birthday
            cy.get('.--close').click()
            cy.get(this.selectorsList().radioOption).eq(1).click() // 11 - gender (gênero)
            cy.get(this.selectorsList().buttonSaveSubmit).eq(0).click({force: true}) // button save 1

            
            cy.get(this.selectorsList().genericComboBox).eq(2).click({force: true}) // array: 2 - blood type
            cy.get(this.selectorsList().bloodItemComboBox).click() // 12 -  blood type
            cy.get(this.selectorsList().genericField).eq(9).clear().type('TestField') //  13 - array: 9 test field
            cy.get(this.selectorsList().buttonSaveSubmit).eq(1).click({force: true}) // button save 2
        }
            accessBodyContain() {
            cy.get('body').should('contain', 'Successfully Updated')
        }



}

 export default MyInfoPage;