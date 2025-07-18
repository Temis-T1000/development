class LeavePage {
    selectorList () {
        const selectors = {
            leaveButton: "[href='/web/index.php/leave/viewLeaveModule']",
        }
        return selectors;
    }
       accessLeave() {
        cyan.get(this.selectorList().leaveButton).click()
       }
}

export default LeavePage; 