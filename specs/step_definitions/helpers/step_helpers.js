/*******************************************************
* Utility functions.
********************************************************/

var dateFormat              = require('dateformat');

class TestHelpers {

    constructor(){}

    /**************************************************************
    *   Return date today, formatted as per transaction log field
    **************************************************************/

    getToday (hh, mm, ss){
        var today = new Date();
        today.setHours(hh, mm, ss);
        // e.g 8/29/2020 00:00:00 am
        today = dateFormat(today, "m/d/yyyy hh:MM:ss TT");
        return today;
    }

    /**************************************************************
    *   Returns an invalid date
    **************************************************************/

    getInvalidDate(){
        return "13/45/5555 50:49:99 CM"
    }

    /**************************************************************
    *   Returns a random string with passed length
    **************************************************************/

    getRandomString(length){
       var result           = '';
       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
       var charactersLength = characters.length;
       for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    }

    /**************************************************************
    *   Returns a random sequence of alpha-numeric characters
    **************************************************************/

    getRandomChars(length){
       var result           = '';
       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()?><|\?/~`';
       var charactersLength = characters.length;
       for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    }

    /**********************************************************************
    *   Returns an invalid file name as per trasaction log filter elements
    ***********************************************************************/

    getInvalidFileName(length){
       var result           = '';
       var characters       = '!@#$%)(*&<>.,?/"';
       var charactersLength = characters.length;
       for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    }

}
module.exports = {TestHelpers}
