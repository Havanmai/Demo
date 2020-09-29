/**Js chưa hàm dung chung
 * Author : HVM
 * Edit: định dạng cho thành phần tiền
 * */var CommonJs = {
    fomartMoney(money) {
        return money.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
Number.prototype.formatMoney = function () {
    return this.ToString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}