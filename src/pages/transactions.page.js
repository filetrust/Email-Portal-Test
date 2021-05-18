const assert = require('assert')
const {
    I
} = inject();

const {
    PageHelpers
} = require('./helpers/helper.page')

module.exports = {

    //Locators

    fields: {
        inputFilterSender: `div[id='inputFilterSender'] > input`,
        inputFilterRecipient: `div[id='inputFilterRecipient'] > input`,
        inputFilterSubject: `div[id='inputFilterSubject'] > input`,
        inputFilterTransactionID: `div[id='inputFilterTransactionID'] > input`,
        inputFilterFilename: `div[id='inputFilterFilename'] > input`,
        customPaginatorGoTo: `input[class*='custom-paginator-goto']`,
    },
    buttons: {
        previousPage: `button[class*='previous']`,
        firstPage: `button[class*='first']`,
        nextPage: `button[class*='next']`,
        lastPage: `button[class*='last']`,
        go: `button[class*='custom-paginator-goto-button']`,
        addFilter: `button[id='addFilterButton']`,
        addSender: `button[name='sender']`,
        addRecepient: `button[name='recipient']`,
        addFileName: `button[name='file-name']`,
        addtransactionId: `button[name='transaction-id']`,
        addSubject: `button[name='subject']`,
        outcomeApply: `button[class*='outcome-apply-button']`,
        dateApply: `button[class*='applyBtn']`,
        senderAddButton: `button[class*='button button-filled button-icon icon-add add-this-filter-button']`,
        receiverAddButton: `button[class*='button button-filled button-icon icon-add add-this-filter-button']`,
        moreFilters: `span[class*='filters-title']`,
        transactionLogTable: `table[id='filters-title']`
    },
    calendar: {
        dateTimePicker: `input[class*='date-time-picker']`,

    },
    popups: {
        filterFrom: `div[id='filterMenuPopup'] > ul > li:nth-of-type(1) > button`,
        filterTo: `div[id='filterMenuPopup'] > ul > li:nth-of-type(2) > button`,
        filterSubject: `div[id='filterMenuPopup'] > ul > li:nth-of-type(5) > button`,
        filterFileOutcomes: `div[id='filterMenuPopup'] > ul > li:nth-of-type(3) > button`,
        filterTransactionId: `div[id='filterMenuPopup'] > ul > li:nth-of-type(4) > button`,
        filterFileName: `div[id='filterMenuPopup'] > ul > li:nth-of-type(6) > button`,
        filterMenu: `div[id='filterMenuPopup']`
    },

    tables: {
        transactionLogTable: {
            transactionLogTable_wrapper: `div[id='transactionLogTable_wrapper']`,
            transactionLogTableRow: `tr.transaction-row`,
            transactionLogTableRecordsenderField: `tr.transaction-row:nth-of-type(rowNumber) > td.sender-cell`,
            transactionLogTableRecordrecieverField: `tr.transaction-row:nth-of-type(rowNumber) > td.receiver-cell`
        }
    },

    //Methods
    /*
     * Datetimepicker
     * ***************************************************************
     */
    async getDatetimepicker() {
        const element = this.calendar.dateTimePicker;
        return await I.grabAttributeFrom(element, 'text');
    },

    setDatetimepicker(value) {
        if (value == null) {
            value = "";
        }
        const element = this.calendar.dateTimePicker;
        I.fillField(element, value);
    },
    /*
     * AddingFilter
     * ***************************************************************
     */
    clickAddFilterButton() {
        const element = this.buttons.addFilter;
        I.click(element);
    },

    clickApplyDate() {
        const element = this.buttons.dateApply;
        I.click(element);
    },


    clickDatePicker() {
        const element = this.calendar.dateTimePicker;
        I.click(element);
    },

    clickFrom() {
        const element = this.popups.filterFrom;
        I.click(element);
    },

    clickTo() {
        const element = this.popups.filterTo;
        I.click(element);
    },


    clickTransactionId() {
        const element = this.popups.filterTransactionId;
        I.click(element);
    },

    clickSubject() {
        const element = this.popups.filterSubject;
        I.click(element);
    },

    clickFileName() {
        const element = this.popups.filterFileName;
        I.click(element);
    },


    /*
     * SendersEmailAddress
     * ***************************************************************
     */

    async getSendersEmailAddress() {
        const element = this.fields.inputFilterSender;
        return await I.grabAttributeFrom(element, 'text');
    },

    setSendersEmailAddress(value) {
        if (value == null) {
            value = "";
        }
        const element = this.fields.inputFilterSender;
        I.fillField(element, value);
    },

    clickAddSender() {
        const element = this.buttons.addSender;
        I.click(element);
    },

    /*
     * RecipientsEmailAddress
     * ***************************************************************
     */

    async getRecipientsEmailAddress() {
        const element = this.fields.inputFilterRecipient;
        return await I.grabAttributeFrom(element, 'text');
    },

    setRecipientsEmailAddress(value) {
        if (value == null) {
            value = "";
        }
        const element = this.fields.inputFilterRecipient;
        I.fillField(element, value);
    },

    clickAddRecipient() {
        const element = this.buttons.addRecepient;
        I.click(element);
    },

    clickMoreFilters() {
        const element = this.buttons.moreFilters;
        I.click(element);
    },
    /*
     * FileOutcome
     * ***************************************************************
     */
    clickFileOutcomes() {
        const element = this.popups.filterFileOutcomes;
        I.click(element);
    },

    clickApplyOutcome() {
        const element = this.buttons.outcomeApply;
        I.click(element);
    },

    /*
     * TransactionId
     * ***************************************************************
     */
    setTransactionId(value) {
        if (value == null) {
            value = "";
        }
        const element = this.fields.inputFilterTransactionID;
        I.fillField(element, value);
    },

    clickAddTransactionid() {
        const element = this.buttons.addtransactionId;
        I.click(element);
    },

    async getTransactionId() {
        const element = this.fields.inputFilterTransactionID;
        return await I.grabAttributeFrom(element, 'text');
    },
    /*
     * EmailSubject
     * ***************************************************************
     */
    async getEmailSubject() {
        const element = this.fields.inputFilterSubject;
        return await I.grabAttributeFrom(element, 'text');
    },

    setEmailSubject(value) {
        if (value == null) {
            value = "";
        }
        const element = this.fields.inputFilterSubject;
        I.fillField(element, value);
    },

    clickAddSubject() {
        const element = this.buttons.addSubject;
        I.click(element);
    },

    /*
     * FileName
     * ***************************************************************
     */
    async getFileName() {
        const element = this.fields.inputFilterFilename;
        return await I.grabAttributeFrom(element, 'text');
    },

    setFileName(value) {
        if (value == null) {
            value = "";
        }
        const element = this.fields.inputFilterFilename;
        I.fillField(element, value);
    },

    clickAddFilename() {
        const element = this.buttons.addFileName;
        I.click(element);
    },

    clickSenderAddButton() {
        const element = this.buttons.senderAddButton;
        I.click(element);
    },

    clickReceiverAddButton() {
        const element = this.buttons.receiverAddButton;
        I.click(element);
    },

    /*
     * Pagination
     * ***************************************************************
     */
    clickFirst() {
        const element = this.buttons.firstPage;
        I.click(element);
    },

    clickPrevious() {
        const element = this.buttons.previousPage;
        I.click(element);
    },

    clickLast() {
        const element = this.buttons.lastPage;
        I.click(element);
    },

    clickNext() {
        const element = this.buttons.nextPage;
        I.click(element);
    },

    setCustomPage(value) {
        if (value == null) {
            value = "";
        }
        const element = this.fields.customPaginatorGoTo;
        I.fillField(element, value);
    },

    clickGo() {
        const element = this.buttons.go;
        I.click(element);
    },

    clickTransactionLogTable() {
        const element = this.tables.transactionLogTable.transactionLogTable_wrapper;
        I.click(element);
    },

    assertSenderEmailTransactionsLogTable(senderEmail) {
        const numberOfRowsInTable = I.grabNumberOfVisibleElements(this.tables.transactionLogTable.transactionLogTableRow)
        let rowNumber, rowIdentifier
        numberOfRowsInTable.then((numberOfRows) => {
            for(let index=1; index <= numberOfRows; index++) {
                rowIdentifier = this.tables.transactionLogTable.transactionLogTableRecordsenderField
                rowIdentifier = rowIdentifier.replace("rowNumber", `${index}`);
                this.assertSenderInRecordInTransactionLogTable(rowIdentifier, senderEmail);
            }
        })
    },

    assertReceiverEmailTransactionsLogTable(receiverEmail) {
        const numberOfRowsInTable = I.grabNumberOfVisibleElements(this.tables.transactionLogTable.transactionLogTableRow)
        let rowNumber, rowIdentifier
        numberOfRowsInTable.then((numberOfRows) => {
            for(let index=1; index <= numberOfRows; index++) {
                rowIdentifier = this.tables.transactionLogTable.transactionLogTableRecordrecieverField
                rowIdentifier = rowIdentifier.replace("rowNumber", `${index}`);
                this.assertReceiverInRecordInTransactionLogTable(rowIdentifier, receiverEmail);
            }
        })
    },

    assertSenderInRecordInTransactionLogTable(rowIdentifier, expectedSenderName) {
        senderPromise = PageHelpers.getText(rowIdentifier);
        senderPromise.then((sender) => {
            I.assertEqual(sender[0], expectedSenderName, `Sender email is not correct at ${rowIdentifier} record`);
        }).catch((err) =>{
            console.log(err)
        })
    },

    assertReceiverInRecordInTransactionLogTable(rowIdentifier, expectedReceiverName) {
        receiverPromise = PageHelpers.getText(rowIdentifier);
        receiverPromise.then((receiver) => {
            I.assertEqual(receiver[0], expectedReceiverName, `Receiver email is not correct at ${rowIdentifier} record`);
        }).catch((err) =>{
            console.log(err)
        })
    },

    assertTransactionsCount(expectedRow) {
        I.seeNumberOfVisibleElements(this.tables.transactionLogTable.transactionLogTableRow, expectedRow)
    },

    assertTransactionDateIsSet() {
        datetimepicker = transactionsPage.getDatetimepicker()
        datetimepicker.then((dateTime) => {
            I.assertStringIncludes(dateTime, expectedReceiverName, "Receiver email is not correct for 1st record")
        })
    },

}