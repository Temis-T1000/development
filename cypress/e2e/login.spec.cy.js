

const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    
    dashboardLayout: ".orangehrm-upgrade-layout",
    wrongCredentialAlert: "[role='alert']"
}





describe('Orange HRM Tests', () => {
  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardLayout)
    
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('test')
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-alert-content > .oxd-text')

    
  })
})