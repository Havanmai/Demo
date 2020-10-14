/**Js chưa hàm dung chung
 * Author : HVM
 * Edit: định dạng cho thành phần tiền
 * */var CommonJs = {
     /**
      * Ham dinh dang tien te
      * 
      * @param {string} _money
      *  Author: HVM 298/09/2020
      */
     fomartMoney(money) {
         return money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

     },
        /**
      * Ham format ngay
      * @param {date} _date
 
      *  Author: HVM 29/09/2020
      */
     formatDate(date) {
         // //date2 = new Date(date)
         var part1 = date.substr(0, 10);
         var parts = part1.split('-');
        // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
        // January - 0, February - 1, etc.
         var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
         return mydate.toLocaleDateString();

        



        
     },
   

  
    /**
     * ham check email
     * @param {string} the_email
     * Author: HVM 29/09/2020
     */
    isInvalidEmail(the_email) {
        var at = the_email.indexOf("@");
        var dot = the_email.lastIndexOf(".");
        var space = the_email.indexOf(" ");

        if ((at != -1) && //có ký tự @
            (at != 0) && //ký tự @ không nằm ở vị trí đầu
            (dot != -1) && //có ký tự .
            (dot > at + 1) && (dot < the_email.length - 1) //phải có ký tự nằm giữa @ và . cuối cùng
            &&
            (space == -1)) //không có khoẳng trắng 
        {
            
            return true;
        } else {
           
            return false;
        }

     },
    /**
     * Ham tao title
     * @param {string} column
     *  Author: HVM 29/09/2020
     */
     title(column) {
         return column.slice(0, 5) + `...`;
     },
     
}
Number.prototype.formatMoney = function () {
    return this.ToString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
