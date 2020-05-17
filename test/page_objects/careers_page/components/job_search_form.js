const Element = require('../../base_elements/base_element');
const EC = protractor.ExpectedConditions;

class JobSearchForm {
  constructor() {
    this.keywordField = new Element(`css`, `input[id*='keyword']`);
    this.locationDropdown = new Element(`css`, `[class$='location'] span[role='combobox']`);
    this.departmentDropdown = new Element(`css`, `[class*='departments'][role='combobox']`);
    this.submitButton = new Element(`css`, `button.recruiting-search__submit`);
  }
  passKeyword(keyword) {
    return this.keywordField.sendInput(keyword);
  }
  async selectLocation(location) {
    await this.locationDropdown.click();
    await this.locationDropdown.sendInput(location);
    const targetLocation = element(by.css(`[id$='location-results'] li[id$='${location}']`));
    return targetLocation.click();
  }
  async selectDepartment(department) {
    await this.departmentDropdown.click();
    const targetDepartment = element(by.css(`.multi-select-dropdown input[data-value='${department}'] + span`));
    await browser.wait(EC.elementToBeClickable(targetDepartment), 10000);
    return targetDepartment.click();
  }
  clickSubmitButton() {
    return this.submitButton.click();
  }
  async submitJobSearchForm(keyword, location, department) {
    await this.passKeyword(keyword);
    await this.selectLocation(location);
    await this.selectDepartment(department);
    await this.clickSubmitButton();
  }
}

module.exports = JobSearchForm;
