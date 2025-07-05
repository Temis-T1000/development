class DashboardPage {
    selectorsList() {
    const selectors = {
            dashboardLayout: ".orangehrm-upgrade-layout",
        }
        return selectors;
    }
 
   
    accessDashboardPage() {
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardLayout).should('be.visible')
    }
}

export default DashboardPage