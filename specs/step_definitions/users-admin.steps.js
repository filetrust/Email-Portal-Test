///<reference path="./steps.d.ts" />
var assert = require('assert')
let expect = require('chai').expect;
const faker = require('faker');

const {
    I,
    usersPage,
    env
} = inject();

const uuid = faker.random.uuid();
const userName = "User" + uuid;
const newUserEmail = userName + "@gw.com";

Given('I am logged in as required tenant', () => {
    I.login();
    I.selectTenant(env.qa.tenantName);
    I.wait(5);
});

Given('I am on the users screen', () => {
    I.goToUsers();
});

When('I add a new user with a valid email address', () => {
    const userGroup = "view config";
    usersPage.addUser(userName, env.qa.userEmail, userGroup);
});

When('I update a user record with a new group', () => {
    const userGroup = "Administration Group";
    usersPage.addUser(userName, env.qa.userEmail, userGroup);
});

Then('The new user record is saved with a tick icon', () => {
    I.seeInSource(userName);
    I.seeElement(usersPage.getValidatedUserIcon(userName));
});

When('I add a new user with a duplicate email address', () => {
    const userGroup = "view config";
    usersPage.addUser(userName, env.qa.userEmail, userGroup);
});

Then('the validation error is displayed', () => {
    //I.seeInSource(userName);
});

When('I click the delete user button next to a non admin user and save', () => {
    I.wait(5)
    usersPage.clickDeleteUserRecord(userName);
    usersPage.clickSaveUsersButton();
    usersPage.clickUserModalSaveButton();
});

Then('The user record no longer exist', () => {
    I.dontSeeInSource(userName);
});

When('I add a new user with a non existing email address', () => {
    const userGroup = "view config";
    usersPage.addUser(userName, newUserEmail, userGroup);
});

Then('the record is saved with a warning icon', () => {
    I.seeElement(locate(usersPage.getUserRecord(newUserEmail)).find(usersPage.buttons.nonValidatedUser));

});