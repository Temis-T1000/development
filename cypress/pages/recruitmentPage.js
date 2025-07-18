class RecruitmentPage {
    selectorList () {
        const selectors = {
            recruitmentButton: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
        }
        return selectors;
    }
    accessRecruitment() {
        cyan.get(this.selectorList().recruitmentButton).click()
    }
}

export default RecruitmentPage; 