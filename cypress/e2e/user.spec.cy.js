import userData from '../fixtures/userData.json'

const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    
    dashboardLayout: ".orangehrm-upgrade-layout",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input"
}


describe('Orange HRM Tests', () => {
  it.only('User info upDate - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardLayout)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).type('Firstname Test')
    cy.get(selectorsList.middleNameField).type('Middlename Test')
    cy.get(selectorsList.lastNameField).type('Lastname Test')
    cy.get(selectorsList.genericField).eq(4).clear().type('Empl-Test')
    cy.get(selectorsList.genericField).eq(5).clear().type('Other Test')
    cy.get(selectorsList.genericField).eq(6).clear().type('Drivers Number Test')
    cy.get(selectorsList.genericField).eq(7).clear().type('2035/12/12')
    cy.get(selectorsList.genericField).eq(9).clear().type('TestField  Test')
    
    
    
    
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-alert-content > .oxd-text')

    
  })
})