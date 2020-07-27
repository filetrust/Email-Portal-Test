
const {I, usersPage} = inject();

module.exports = {

/*
 * RolesTab
 * ***************************************************************
 */
async getRolesTabElement() {
    return (`#tab-l1-3`);
},
async clickRolesTab(){
    const element = await this.getRolesTabElement();
   I.click(element);
 },


/*
 * AddBtn
 * ***************************************************************
 */
async getAddBtnElement() {
    return (`header[class*='list-content-left-header'] > div:nth-of-type(2) > button:nth-of-type(2)`);
},
async clickAddBtn() {
    const element = await this.getAddBtnElement();
    I.click(element);
},

/*
 * RolesPane
 * ***************************************************************
 */
async getRolesPaneElement() {
    return (`div[class*='content-left-list-popup']`);
},

async getAvailableRoles() {
    const element = await this.getRolesPaneElement();
    return await locate(element).find('li');
},


/*
 * AdministrationRole2
 * ***************************************************************
 */

 async clickRole(role){

    const roleList = I.grabNumberOfVisibleElements('//section/div/div/div/div/ul/li');
    
    const element =null;
    for (let i =2; i<roleList.length; i++){
        var roleName = I.grabTextFrom("//section/div/div/div/div/ul/li["+i+"]/button")
        if (roleName == role){
            I.say('role name is found as'+ roleName)
         element = ("//section/div/div/div/div/ul/li[" + i + "]/button")
         I.click(element);
        }
    break } 
   // return element;
 },

async getRoleLink(role) {
     return "//button[contains(., '" + role + "')]"
     //("//button[contains(., '" + role + "')]")[0]; ("//button[contains(., '" + role + "')]")[0]
     //"//button[contains(., '" + role + "')]";
}, 

async selectRole(role) {
    const element = await this.getRoleLink(role)
    //if (element.length > 0) {
        I.click(element)[0];
   // }
},

async clickDelete() {
    // await this.selectRole(role)
    const element = `//button[@class='list-item-delete-button tooltip-title']`;
    I.click(element)[0];
},

async clickAdministrationRole2() {
    const element = this.getRoleElement(role);
    I.click(element);
},

/*
 * RoleInput
 * ***************************************************************
 */
async getRoleInputElement() {
    return (`input[id='displayNameInput']`);
},
async getRoleDisplayName() {
    const element = await this.getRoleInputElement();
    return await I.grabValueFrom(element);
},
async setRoleDisplayName(value) {
    const element = await this.getRoleInputElement();
    I.fillField(element, value);
},

 /*
  * CancelRoleEdit
  * ***************************************************************
  */

 async getCancelRoleEditElement() {
     return (`button[id='cancelRoleEdit']`);
 },

 async clickCancelRoleEdit() {
     const element = await this.getCancelRoleEditElement();
     I.click(element);
 },

 /*
  * SaveRoleButton
  * ***************************************************************
  */

 async getSaveRoleButtonElement() {
     return (`button[id='saveRoleButton']`);
 },

 async clickSaveRoleButton() {
     const element = await this.getSaveRoleButtonElement();
     I.click(element);
 },

 /*
  * DeleteRoleConfirmCancel
  * ***************************************************************
  */

 async getDeleteRoleConfirmCancelElement() {
     return (`button[id='deleteRoleConfirmCancel']`);
 },

 async clickDeleteRoleConfirmCancel() {
     const element = await this.getDeleteRoleConfirmCancelElement();
     I.click(element);
 },

 /*
  * DeleteRoleConfirmSave
  * ***************************************************************
  */

 async getDeleteRoleConfirmSaveElement() {
     return (`button[id='deleteRoleConfirmSave']`);
 },

 async clickDeleteRoleConfirmSave() {
     const element = await this.getDeleteRoleConfirmSaveElement();
     I.click(element);
 }, 

/*
 * ApproveFileReleaseToggle
 * ***************************************************************
 */

async getApproveFileReleaseToggleElement() {
    return (`label[for='permission-toggle-860350d4-4dd8-499a-a56b-939c2cf28246']`);
},

async clickApproveFileReleaseToggle() {
    const element = await this.getApproveFileReleaseToggleElement();
    I.click(element);
},


/*
 * ViewSystemConfiguration
 * ***************************************************************
 */

async getViewSystemConfigurationElement() {
    return (`label[for='permission-toggle-26a8129e-c533-4d09-b961-465c8a8b35de']`);
},

async getViewSystemConfiguration() {
    const element = await this.getViewSystemConfigurationElement();
    return await I.grabAttributeFrom(el => el.textContent, element);
},

async clickViewSystemConfiguration() {
    const element = await this.getViewSystemConfigurationElement();
    I.click(element);
},



}
