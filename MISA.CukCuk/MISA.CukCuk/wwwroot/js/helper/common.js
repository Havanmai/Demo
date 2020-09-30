/**Js chưa hàm dung chung
 * Author : HVM
 * Edit: định dạng cho thành phần tiền
 * */var CommonJs = {
    fomartMoney(money) {
        return money.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    },
    formatDate(date) {
        var parts = date.split('/');
        // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
        // January - 0, February - 1, etc.
        var mydate = new Date(parts[2], parts[1] - 1, parts[0]);
        return mydate.toLocaleDateString()
    },
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
            alert("Email valid");
            return true;
        } else {
            alert("Email Invalid");
            return false;
        }

    },
     title(column) {
         return column.slice(0, 5) + `...`;
     }
}
Number.prototype.formatMoney = function () {
    return this.ToString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
