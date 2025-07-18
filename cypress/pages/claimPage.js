class ClaimPage {
    selectorList() {
        const selectors = {
            claimButton: "[href='/web/index.php/claim/viewClaimModule']",
        }
        return selectors;
    }
    accessClaim() {
        cy.get(this.selectorList().claimButton).click()
    }
}

export default ClaimPage;