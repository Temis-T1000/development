import userData from '../fixtures/userData.json'

import LoginPage from '../pages/loginPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'


const loginPage = new LoginPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage()


describe('Orange HRM Tests', () => {
  
  const selectorsList = {

  }

  it.only('User info upDate - Sucess', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    menuPage.accessAdmin()
    menuPage.accessPim()
    menuPage.accessLeave()
    menuPage.accessTime()
    menuPage.accessRecruitment()


    menuPage.accessMyInfo()
    myinfoPage.fillPersonalDetails('João', 'Barros', 'Neves')
    myinfoPage.fillEmployeeDetais('EmployeeId', 'Other Id', '2026-12-28','2030-06-28')
    myinfoPage.saveForm0()
    myinfoPage.fillBloodTypeAndTestField('AB+','Teste Field')
    myinfoPage.saveform1()


    menuPage.accessPerformance()
    menuPage.checkDashboardPage()
    menuPage.accessDirectory()

    menuPage.accessClaim()
    menuPage.accessBuzz()         

  })
  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get('.oxd-alert-content > .oxd-text')

    
  })
})