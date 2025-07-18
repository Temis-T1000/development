class MenuPage {
    selectorList () {
        const selectors = {
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
            pimButton: "[href='/web/index.php/pim/viewPimModule']",
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
            timeButton: "[href='/web/index.php/time/viewTimeModule']",
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",         
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",          
            dashboardButton: "[href='/web/index.php/dashboard/index']", 
            directoryButton: "[href='/web/index.php/directory/viewDirectory']",
            maintenanceButton: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
            buzzButton: "[href='/web/index.php/buzz/viewBuzz']",
        }
        return selectors;
    }
    accessAdmin() {
         cy.get(this.selectorList().adminButton).click()
    }
    accessPim() {
      cy.get(this.selectorList().pimButton).click()
    }
    accessLeave() {
        cy.get(this.selectorList().leaveButton).click()
    }
    accessTime() {
        cy.get(this.selectorList().timeButton).click()
    }
    accessRecruitment() {
        cy.get(this.selectorList().recruitmentButton).click()
    }
    accessMyInfo() {          
        cy.get(this.selectorList().myInfoButton).click()
    }
    checkDashboardPage() {
        cy.get(this.selectorList().dashboardButton).click()
    }
    accessPerformance() {
        cy.get(this.selectorList().performanceButton).click()
    }
    accessDirectory() {
        cy.get(this.selectorList().directoryButton).click()
    }
    // accessMaintenance() {
    //     cy.get(this.selectorList().maintenanceButton).click()
    // }
    // accessLoginMaintenance(username, password) {   
    //     cy.get(this.selectorList().passwordField).type(password)
    //     cy.get(this.selectorList().loginButton).click()  
    // }
    accessClaim() {
        cy.get(this.selectorList().claimButton).click()
    }
    accessBuzz() {
        cy.get(this.selectorList().buzzButton).click()
    }
}

export default MenuPage;