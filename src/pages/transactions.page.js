const {
  I
} = inject();

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
    result :{
      showing : `div[class*='dataTables_info']`
    },

  //Methods


  /*
   * Datetimepicker
   * ***************************************************************
   */
  async getDatetimepicker() {
    const element = this.calendar.dateTimePicker;
    return await I.grabAttributeFrom(element, jsonValue());
  },

  setDatetimepicker(value) {
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
    const element = this.fields.senderInput;
    return await I.grabAttributeFrom(element, jsonValue());
  },

  setSendersEmailAddress(value) {
    const element = this.fields.senderInput;
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
    return await I.grabAttributeFrom(element, jsonValue());
  },

  setRecipientsEmailAddress(value) {
    const element = this.fields.inputFilterRecipient;
    I.fillField(element, value);
  },

  clickAddRecipient() {
    const element = this.buttons.addReceiver;
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
    const element = this.fields.inputFilterTransactionID;
    I.fillField(element, value);
  },

  clickAddTransactionid() {
    const element = this.buttons.addtransactionId;
    I.click(element);
  },

  /*
   * EmailSubject
   * ***************************************************************
   */
  async getEmailSubject() {
    const element = this.fields.inputFilterSubject;
    return await I.grabAttributeFrom(element, jsonValue());
  },

  setEmailSubject(value) {
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
    return await I.grabAttributeFrom(element, jsonValue());
  },

  setFileName(value) {
    const element = this.fields.inputFilterFilename;
    I.fillField(element, value);

  },

  clickAddFilename() {
    const element = this.buttons.addFileName;
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

  clickPrevious() {
    const element = this.buttons.nextPage;
    I.click(element);
  },

  setCustomPage(value) {
    const element = this.fields.customPaginatorGoTo;
    I.fillField(element, value);
  },

  clickGo() {
    const element = this.buttons.go;
    I.click(element);
  },

    /*
   * Result
   * ***************************************************************
   */
    totalNumberOfItem(){
        const element = this.result.showing;
        let result = I.grabTextFrom(element);
        return result.substring(18);
    },
}