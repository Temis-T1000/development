import LoginPage from '../pages/loginPage.js'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()


describe('Orange HRM Tests', () => {
  
  const selectorsList = {
      
      dashboardLayout: ".orangehrm-upgrade-layout",
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
  
      
      bloodItemComboBox: ".oxd-select-dropdown > :nth-child(2)",
  }

  it.only('User info upDate - Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)   
    
    // cy.get(selectorsList.usernameField).type()
    // cy.get(selectorsList.passwordField).type()
    // cy.get(selectorsList.loginButton).click()
    // cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    // cy.get(selectorsList.dashboardLayout)
    // cy.get(selectorsList.myInfoButton).click()
    // cy.get(selectorsList.firstNameField).clear().type('Firstname Test')
    // cy.get(selectorsList.middleNameField).clear().type('Middle Test')
    // cy.get(selectorsList.lastNameField).clear().type('Lastname Test')
    // cy.get(selectorsList.genericField).eq(4).clear().type('Empl-Test')
    // cy.get(selectorsList.genericField).eq(5).clear().type('Other Test')
    // cy.get(selectorsList.genericField).eq(6).clear().type('Drivers Number Test')
    // cy.get(selectorsList.dateField).eq(0).clear().type('2025-03-10')  
    // cy.get(selectorsList.genericComboBox).eq(0).click({force: true})
    // cy.get(selectorsList.secondeItemComboBox).click()
    // cy.get(selectorsList.genericComboBox).eq(1).click({force: true})
    // cy.get(selectorsList.thirdiItemComboBox).click()
    // cy.get(selectorsList.dateBirthday).eq(8).clear().type('1988-28-06')
    // cy.get('.--close').click()
    // cy.get(selectorsList.radioOption).eq(1).click()    
    // cy.get(selectorsList.buttonSaveSubmit).eq(0).click({force: true})
    // cy.get('body').should('contain', 'Successfully Updated')
    
    // cy.get(selectorsList.genericComboBox).eq(2).click({force: true})
    // cy.get(selectorsList.bloodItemComboBox).click()
    // cy.get(selectorsList.genericField).eq(9).clear().type('TestField')
    // cy.get(selectorsList.buttonSaveSubmit).eq(1).click({force: true})
  })

  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-alert-content > .oxd-text')

    
  })
})