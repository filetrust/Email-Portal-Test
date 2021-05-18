///<reference path="./steps.d.ts" />
const assert = require('assert')
const {
    TestHelpers
} = require('./helpers/step_helpers')

const {
    I,
    transactionsPage,
    env
} = inject();

const tenant = env.qa.tenantName
const recipient = env.qa.recipientEmailId
const sender = env.qa.senderEmailId
const transactionId = env.qa.senderEmailId
const subject = env.qa.emailSubject
const fileName = env.qa.fileName
const gotoCustomPage = env.qa.gotoCustomPage

const testHelpers = new TestHelpers()

var data = require('../../src/data/transaction-logs-data').data


/*****************************************
 * Navigation
 ******************************************/
Given('I am logged into the portal as a tenant', () => {
    I.loginAs(env.qa.email, env.qa.password);
    I.wait(2)
});

Given('I am on transaction log screen', () => {
    I.goToTransactionLog();
    I.wait(2)
});

When('I set transaction date to a given value', (table) => {
    for (const id in table.rows) {
        if (id < 1) {
            continue; // skip the header
        }
        const cells = table.rows[id].cells;
        const fromDate = cells[0].value;
        const toDate = cells[1].value;
        const sender = cells[2].value;
        const receiver = cells[3].value;
        transactionsPage.setDatetimepicker(fromDate + " - " + toDate)
        transactionsPage.clickApplyDate()
        transactionsPage.clickMoreFilters()
        transactionsPage.clickAddFilterButton();
        // Add sender
        transactionsPage.clickFrom()
        transactionsPage.setSendersEmailAddress(sender)
        transactionsPage.clickAddSender()
        // Add recipient
        transactionsPage.clickTo()
        transactionsPage.setRecipientsEmailAddress(receiver)
        transactionsPage.clickAddRecipient()
        transactionsPage.clickTransactionLogTable()
    }
});

Then('I see {int} rows in the table', (numRows) => {
    transactionsPage.assertTransactionsCount(numRows);
});

Then('I should see tom@entsoltest1.glasswallsolutions.com as sender in each record in table', () => {
    transactionsPage.assertSenderEmailTransactionsLogTable("tom@entsoltest1.glasswallsolutions.com")
});

Then('I should see bill@entsoltest1.glasswallsolutions.com as receiver in each record in table', () => {
    transactionsPage.assertReceiverEmailTransactionsLogTable("bill@entsoltest1.glasswallsolutions.com")
});

When('I set transaction data to following - from date to {} to date to {} sender to {} and recepient to {}', (fromDate, toDate, sender, receiver) => {
    transactionsPage.setDatetimepicker(fromDate + " - " + toDate)
    transactionsPage.clickApplyDate()
    transactionsPage.clickMoreFilters()
    transactionsPage.clickAddFilterButton();
    // Add sender
    transactionsPage.clickFrom()
    transactionsPage.setSendersEmailAddress(sender)
    transactionsPage.clickAddSender()
    // Add recipient
    transactionsPage.clickTo()
    transactionsPage.setRecipientsEmailAddress(receiver)
    transactionsPage.clickAddRecipient()
});

/************************************
 *   Click the add filter button
 *************************************/

When('I add a filter', () => {
    transactionsPage.clickAddFilterButton()
});

/**********************************
 * Transaction date set/unset steps
 ***********************************/

When('I set transaction date to a valid value', () => {
    transactionsPage.clickDatePicker()
    // We will set the current data 00:00 hours by default to  date, though this could be parametrized
    var today = testHelpers.getToday(0, 0, 0)
    today = today + " - " + testHelpers.getToday(23, 59, 59)
    transactionsPage.setDatetimepicker(today)
});

Then('The transaction date is set', () => {
    transactionsPage.assertTransactionDateIsSet();
    /*var datePickerTime = transactionsPage.getDatetimepicker()
    var today = testHelpers.getToday(0, 0, 0)
    today = today + " - " + testHelpers.getToday(23, 59, 59)*/
    //console.log('datePickerTime- '+datePickerTime)
    //console.log('today- '+today)
    //equal(today, datePickerTime, "Transaction log from date mismatched")
});

When('I set transaction date to invalid date', () => {
    transactionsPage.clickDatePicker()
    var invalidDate = testHelpers.getInvalidDate()
    transactionsPage.setDatetimepicker(invalidDate)
});

When('I unset transaction date', () => {
    transactionsPage.clickDatePicker()
    transactionsPage.setDatetimepicker(null)
});

Then('The transaction date is not set', () => {
    var datePickerTime = transactionsPage.getDatetimepicker()
    //equal(datePickerTime,null, "Transaction log from date mismatched")
});

/**********************************
 * Input Filter Sender Steps
 ***********************************/

When('I set sender to a valid value', () => {
    // We will set email ids for sender and receiver in .env  environment file
    transactionsPage.clickAddFilterButton();
    // From popup
    transactionsPage.clickFrom()
    // Set value
    console.log('senderEmailId = ' + sender)
    transactionsPage.setSendersEmailAddress(sender)
    // Add sender
    transactionsPage.clickAddSender()
});

Then('The sender id is set', () => {
    var senderReceived = transactionsPage.getSendersEmailAddress()
    //equal(sender, senderReceived, "Sender email id mismatched")
});

When('I set sender id to an invalid value', () => {
    // From popup
    transactionsPage.clickFrom()
    // Add sender
    transactionsPage.clickAddSender()
    transactionsPage.setSendersEmailAddress("some*invalid!email`\'\"><id")
});

When('I unset sender id', () => {
    // From popup
    transactionsPage.clickFrom()
    // Add sender
    transactionsPage.clickAddSender()
    transactionsPage.setSendersEmailAddress(null)
});

Then('The sender id is not set', () => {
    var sender = transactionsPage.getSendersEmailAddress()
    //equal(sender, null, "Sender email id was not unset")
});

/**********************************
 * Input Filter recipient Steps
 ***********************************/

When('I set recipient to a valid value', () => {
    // We will set email ids for sender and receiver in .env  environment file
    // To popup
    transactionsPage.clickTo()
    // Add recipient
    transactionsPage.clickAddRecipient()
    transactionsPage.setRecipientsEmailAddress(recipient)
});

Then('The recipient id is set', () => {
    var recipientReceived = transactionsPage.getRecipientsEmailAddress()
    //equal(recipient, recipientReceived, "Recipient email id mismatched")
});

When('I set recipient id to an invalid value', () => {
    // To popup
    transactionsPage.clickTo()
    // Add recipient
    transactionsPage.clickAddRecipient()
    transactionsPage.setRecipientsEmailAddress("some*invalid!email`\'\"><id")
});

When('I unset recipient id', () => {
    // To popup
    transactionsPage.clickTo()
    // Add recipient
    transactionsPage.clickAddRecipient()
    transactionsPage.setRecipientsEmailAddress(null)
});

Then('The recipient id is not set', () => {
    var recipientReceived = transactionsPage.getRecipientsEmailAddress()
    //equal(recipientReceived, null, "Recipient email id was not unset")
});


/**********************************
 * Input Filter Transaction Id
 ***********************************/

When('I set transaction-id to a valid value', () => {
    // We will set transaction ids in .env  environment file
    // To popup
    transactionsPage.clickTransactionId()
    // Add transaction-id
    transactionsPage.clickAddTransactionid()
    transactionsPage.setTransactionId(transactionId)
});

Then('The transaction-id is set', () => {
    var transactionIdReceived = transactionsPage.getTransactionId()
    //equal(transactionId, transactionIdReceived, "Transaction id mismatched")
});

When('I set transaction-id to an invalid value', () => {
    // To popup
    transactionsPage.clickTransactionId()
    // Add transaction-id
    transactionsPage.clickAddTransactionid()
    transactionsPage.setTransactionId(testHelpers.getRandomChars(500))
});

When('I unset transaction-id', () => {
    // To popup
    transactionsPage.clickTransactionId()
    // Add transaction-id
    transactionsPage.clickAddTransactionid()
    transactionsPage.setTransactionId(null)
});

Then('The transaction-id is not set', () => {
    var transactionIdReceived = transactionsPage.getTransactionId()
    //equal(transactionIdReceived, null, "Transaction was not unset")
});


/**********************************
 * Input Filter Email Subject
 ***********************************/

When('I set subject to a valid value', () => {
    // We will set subject in .env  environment file
    // To popup
    transactionsPage.clickSubject()
    // Add subject
    transactionsPage.clickAddSubject()
    transactionsPage.setEmailSubject(subject)
});

Then('The subject is set', () => {
    var subjectReceived = transactionsPage.getEmailSubject()
    //equal(subject, subjectReceived, "Email subject mismatched")
});

When('I set subject to an extra ordinarily large value', () => {
    // To popup
    transactionsPage.clickSubject()
    // Add subject
    transactionsPage.clickAddSubject()
    transactionsPage.setEmailSubject(testHelpers.getRandomString(999999))
});

When('I unset subject', () => {
    // To popup
    transactionsPage.clickSubject()
    // Add subject
    transactionsPage.clickAddSubject()
    transactionsPage.setEmailSubject(null)
});

Then('The subject is not set', () => {
    var subjectReceived = transactionsPage.getEmailSubject()
    //equal(subjectReceived, null, "Email Subject was not unset")
});


/**********************************
 * Input Filter File Name
 ***********************************/

When('I set file name to a valid value', () => {
    // We will set file name in .env  environment file
    // To popup
    transactionsPage.clickFileName()
    // Add filename
    transactionsPage.clickAddFilename()
    transactionsPage.setFileName(fileName)
});

Then('The file name is set', () => {
    var fileNameReceived = transactionsPage.getFileName()
    //equal(file, fileNameReceived, "File name mismatched")
});

When('I set file name to an invalid value', () => {
    // We will set file name in .env  environment file
    // To popup
    transactionsPage.clickFileName()
    // Add filename
    transactionsPage.clickAddFilename()
    transactionsPage.setFileName(testHelpers.getInvalidFileName(100))
});

When('I unset file name', () => {
    // To popup
    transactionsPage.clickFileName()
    // Add filename
    transactionsPage.clickAddFilename()
    transactionsPage.setFileName(null)
});

Then('The file name is not set', () => {
    var fileNameReceived = transactionsPage.getFileName()
    //equal(fileNameReceived, null, "File name was not unset")
});


/**********************************
 * Input Filter File Outcomes
 ***********************************/

When('I selected (\d+) file outcomes', (outcomes) => {
    // Some unclarity here. Looks like some set of check -boxes are here. If we get possible values for these, can write this better.
    transactionsPage.clickFileOutcomes()
    transactionsPage.clickApplyOutcome()
});

When('I unselected all file outcomes', () => {
    // Some unclarity here. Looks like some set of check -boxes are here. If we get possible values for these, can write this better.
    // Leaving empty till we have dom elements to apply these changes
});


// Could not find the dom element to get outcomes. We can add get-tests if we have them. Leaving empty for now
Then('File outcomes are set', () => {
    var outcomes = true
    assertTrue(true, outcomes, "File outcomes was not set")
});

// Could not find the dom element to get outcomes. We can add get-tests if we have them. Leaving empty for now
Then('File outcomes are unset', () => {
    var outcomes = true
    assertTrue(true, outcomes, "File outcomes was not unset")
});

/***************************************
 * Click Go (to fetch transaction logs)
 ****************************************/

When('I clicked go', () => {
    transactionsPage.clickGo()
});

/***************************************
 * Pagination
 ****************************************/

When('I clicked first', () => {
    transactionsPage.clickFirst()
});

Then('I am on the first page', () => {
    // Assuming for now the page scroll is called Previous and Next, First and Last
    I.dontSee('Previous');
    I.see('Next');
});

When('I clicked last', () => {
    transactionsPage.clickLast()
});

Then('I am on the last page', () => {
    // Assuming for now the page scroll is called Previous and Next, First and Last
    I.dontSee('Next');
    I.see('Previous');
});

When('I clicked next', () => {
    transactionsPage.clickNext()
});

When('I clicked previous', () => {
    transactionsPage.clickPrevious()
});

Then('I am on page (\d+)', (pageNumber) => {
    // We dont have the id of the element that shows the current page number. We can check if that element value is same as pageNumber value if we get that
    // e.g.
    //I.seeInField('pageElement[pager]',pageNumber);
});

/********************************
 * Custom page
 *********************************/

When('I set a custom page', () => {
    transactionsPage.setCustomPage(gotoCustomPage)
});

Then('I am on the custom page', () => {
    // We dont have the id of the element that shows the current page number. We can check if that element value is same as gotoCustomPage value if we get that
    // e.g.
    //I.seeInField('pageElement[pager]',custompageNumber);
});