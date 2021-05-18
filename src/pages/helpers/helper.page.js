const {
    I
} = inject();

class PageHelpers {

    constructor() {
    }

    //Methods

    /**************************************************************
     *   Return date Text on the given field
     **************************************************************/
    static async getText(locator) {
        return await I.grabTextFromAll(locator);
    }
}

module.exports = {PageHelpers};