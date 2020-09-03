///<reference path="./steps.d.ts" />
var assert = require('assert')

const {
    I,
    homePage,
    systemSettingsPage,
    env
} = inject();

const transactionId = env.qa.transactionId

Given('I am logged into the portal as a multi account tenant', () => {
    I.loginAs(env.qa.email, env.qa.password);
    I.wait(5)
});

Then('Navigation to transaction log page', () => {
    I.goToTransactionLog();
    I.wait(5)
});

When('Search Transaction log via transaction id', ()=>{
    I.clickAddFilterButton();
    I.clickTransactionId();
    I.setTransactionId(transactionId);
    I.clickAddTransactionid();
});

Then('Transaction display showing total number of items', () => {
    I.totalNumberOfItem();
});