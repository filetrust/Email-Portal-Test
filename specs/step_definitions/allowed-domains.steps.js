///<reference path="./steps.d.ts" />
var assert = require('assert')
const faker = require('faker');

const {I, allowedDomainsPage, homePage, env} = inject();
const file = './src/data/domain_1.csv'

Given('I am logged in as required tenant', () => {
  I.login();
  I.wait(5)
  I.selectTenant(env.qa.tenantName);
});

When('I add a valid Domain and save', () => {
  allowedDomainsPage.clickAddAllowedDomain();
  allowedDomainsPage.setDomain(env.qa.domain);
  allowedDomainsPage.clickSaveAllowedDomainsButton();
});

Then('The Domain is validated with a green tick', () => {
  I.seeElement(allowedDomainsPage.buttons.validatedDomainTick)
});

When('I Import a csv file containing a valid Allowed Domain', () => {
  allowedDomainsPage.attachDomainRecord(file);
  allowedDomainsPage.clickSaveAllowedDomainsButton();
});

When('I click delete on a existing Domain entry and save changes', () => {
  // From "specs\features\allowed-domains.feature" {"line":19,"column":9}
  throw new Error('Not implemented yet');
});

Then('The Domain record is deleted', () => {
  // From "specs\features\allowed-domains.feature" {"line":20,"column":9}
  throw new Error('Not implemented yet');
});

When('I update a current Allowed Domain with a valid one and save', () => {
  // From "specs\features\allowed-domains.feature" {"line":23,"column":9}
  throw new Error('Not implemented yet');
});

When('I enter a invalid Domain and save', () => {
  // From "specs\features\allowed-domains.feature" {"line":28,"column":9}
  throw new Error('Not implemented yet');
});

Then('The Domain is not validated with a warning icon', () => {
  // From "specs\features\allowed-domains.feature" {"line":29,"column":9}
  throw new Error('Not implemented yet');
});

When('I click delete on a existing Domain entry and revert', () => {
  // From "specs\features\allowed-domains.feature" {"line":32,"column":9}
  throw new Error('Not implemented yet');
});

Then('The Domain record is not deleted', () => {
  // From "specs\features\allowed-domains.feature" {"line":33,"column":9}
  throw new Error('Not implemented yet');
});

When('I click on the Import icon', () => {
  // From "specs\features\allowed-domains.feature" {"line":16,"column":9}
  throw new Error('Not implemented yet');
});

Given('I am on the Allowed Domains page', () => {
    I.goToAllowedDomains();
});
