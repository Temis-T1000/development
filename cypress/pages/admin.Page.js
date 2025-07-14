class AdminPage {
    selectorList () {
        const selectors = {
            adminButton: "[href='/web/index.php/admin/viewAdminModule']",
        }
        return selectors;
    }
    accessAdminPage() {
        cy.get(this.selectorList().adminButton).click()
    }
}

export default AdminPage; // Aqui exporta a classe ExemploPage para ser usada em outros arquivos de teste 