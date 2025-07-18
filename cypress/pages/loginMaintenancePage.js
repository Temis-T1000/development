class LoginMaintenancePage {
    selectorsList() {
        const selectors = {
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
        }
        return selectors;
    }
    accessMaintenance() {
        cy.get(this.selectorsList().maintenanceButton).click()
    }
    accessLoginMaintenance(username, password) {
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()  
    }
}

export default LoginMaintenancePage;