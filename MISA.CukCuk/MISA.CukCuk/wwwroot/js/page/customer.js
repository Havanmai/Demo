$(document).ready(function () {
 
    
    var customer = new Customer();
    //customer.loadData();
  
    
})
class Customer extends Base  {
    constructor() {
        super();
    
    }
    getData() {
        this.Data = data;
    }
   
    //inintEvent() {

    //    $('#btnAdd').click(this.btnAddOnClick.bind(this));
    //    $('#btnCancel').click(this.btnCancelOnClick.bind(this));
    //    $('.close').click(this.btnCloseOnClick.bind(this));
    //    $('#btnSave').click(this.btnSaveOnClick.bind(this));
    //    $('#table').on('click', 'tr', this.rowonclick);
    //    $('btnReload').click(this.btnReloadOnClick.bind(this));
    //}
    ////loadData() {

       
    ////    // lấy dư liệu
    ////    var customer = data;
    ////    // đọc dữ liệu
    ////    $.each(customer, function (index, item) {
    ////        var trHTML = $(`<tr>
    ////                  <td>`+ item["CustomerCode"] + `</td>
    ////                  <td>`+ item["CustomerName"] + `</td>
    ////                  <td >`+ item["CustomerCompany"] + `</td>
    ////                  <td align="center">`+ item["Code"] + `</td>
    ////                  <td>`+ item["CustomerAddress"] + `</td>
    ////                  <td  title="`+ item["CustomerEmail"] + `">` + item["CustomerEmail"].slice(0,5) +`...`+ `</td>
    ////                  <td align="center">`+ item["Mobile"] + `</td>
    ////                  <td align="right">`+ CommonJs.fomartMoney(item["DebitMoney"]) + `</td>
    ////                  <td align="center">`+ item["Datetime"] +`</td>
    ////             </tr>`);
    ////        $('#table tbody').append(trHTML);
    ////    })

    ////}
    
    ///**Hien thi modal
    // Author: HVM:
    // Edit: Hien modal*/
    //btnAddOnClick() {
    //    this.showDetailModal();
    //}
    ///**tat modal
    //Author: HVM:
    //Edit: Tat modal*/
    //btnCancelOnClick() {
    //    this.hideDetailModal();

    //} 
    ///**tat modal
    //Author: HVM:
    //Edit: Tat modal*/
    //btnCloseOnClick() {
    //    this.hideDetailModal();
    //}
    ///**hiển  modal
    //Author: HVM:
    //Edit: Tat modal*/
    //showDetailModal() {
    //    $('.modal').show();
    //    $('.modal-content').show();
    //}
    //hideDetailModal() {
    //    $('.modal').hide();
    //    $('.modal-content').hide();
    //}
    ///**save thoong tin ở bản trong modal
    //Author: HVM:
    //Edit: Tat modal*/
    //btnSaveOnClick() {
    //    //validate thong tin nhap
    //        // thu thap thong tin tren form
    //    // thuc hien cat du lieu
        
    //}
   
    //rowonclick() {
    //    $(this).siblings().removeClass('row-selected');
    //    $(this).addClass('row-selected');
    //}
    ///**load lai du lieu
    // * author: HVM 29/09/2020
    // * edit: load du lieu nut nap*/
    //btnReloadOnClick() {
    //    this.loadData();

    //}
}
//function loadData() {
//    var trHTML = $(`<tr>
//                      <td>KH000 </td>
//                       <td>Tran Minh</td>
//                       <td>Công ty cổ phần MISA</td>
//                       <td>032145697</td>
//                       <td>Hà Nội</td>
//                       <td>misa@gmail.com</td>
//                       <td>0397564823</td>
//                        <td>2000000000</td>
//                 </tr>`);
//    $('#table tbody').append(trHTML);
//    $.each(data, function (index, item) {
//        var trHTML = $(`<tr>
//                      <td>`+ item["CustomerCode"] + `</td>
//                      <td>`+ item["CustomerName"] + `</td>
//                      <td>`+ item["CustomerCompany"] + `</td>
//                      <td>`+ item["Code"] + `</td>
//                      <td>`+ item["CustomerAddress"] + `</td>
//                      <td>`+ item["CustomerEmail"] + `</td>
//                      <td>`+ item["Mobile"] +`</td>
//                      <td>`+ item["DebitMoney"] +`</td>
//                 </tr>`);
//        $('#table tbody').append(trHTML);
//    })
   
//}
        /**dữ liệu ảo
        * author: HVM 29/09/2020
        * edit: dữ liệu ảo  với 3 bản ghis*/
var data = [
    {
        CustomerCode: "KH001",
        CustomerName: "Linh Trang Nguyen",
        CustomerCompany: "VNPT",
        Code: "036987545235",
        CustomerAddress: "Ninh Binh",
        CustomerEmail: "linh@gmail.com",
        Mobile: "0123654789",
        DebitMoney: "10000000",
        Datetime:"22/08/2020"
    },
    {
        CustomerCode: "KH002",
        CustomerName: " Trang Nguyen",
        CustomerCompany: "VNPT",
        Code: "123698547",
        CustomerAddress: "Ninh Binh",
        CustomerEmail: "trang@gmail.com",
        Mobile: "0123654789",
        DebitMoney: "10000039",
        Datetime: "22/08/2020"
    },
    {
        CustomerCode: "KH003",
        CustomerName: "Linh Nguyen",
        CustomerCompany: "VNPT",
        Code: "123698547",
        CustomerAddress: "Ninh Binh",
        CustomerEmail: "linhnguyen@gmail.com",
        Mobile: "0123654789",
        DebitMoney: "100186200",
        Datetime: "22/08/2020"
    }
]