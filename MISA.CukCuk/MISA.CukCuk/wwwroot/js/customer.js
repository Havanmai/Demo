$(document).ready(function () {
 
    
    var customer = new Customer();
    //customer.loadData();
  
    
})
class Customer {
    constructor() {
        this.loadData();
        this.inintEvent();
    
    }
    inintEvent() {

        $('#btnAdd').click(this.btnAddOnClick.bind(this));
        $('#btnCancel').click(this.btnCancelOnClick.bind(this));
        $('.close').click(this.btnCloseOnClick.bind(this));
        $('#btnSave').click(this.btnSaveOnClick.bind(this));
    }
    loadData() {
        $.each(data, function (index, item) {
            var trHTML = $(`<tr>
                      <td>`+ item["CustomerCode"] + `</td>
                      <td>`+ item["CustomerName"] + `</td>
                      <td >`+ item["CustomerCompany"] + `</td>
                      <td align="right">`+ item["Code"] + `</td>
                      <td>`+ item["CustomerAddress"] + `</td>
                      <td  title="`+ item["CustomerEmail"] + `">` + item["CustomerEmail"].slice(0,5) +`...`+ `</td>
                      <td>`+ item["Mobile"] + `</td>
                      <td align="right">`+ item["DebitMoney"].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + `</td>
                      <td>`+ new Date(item["Datetime"][2], item["Datetime"][2] - 1, item["Datetime"][0]) +`</td>
                 </tr>`);
            $('#table tbody').append(trHTML);
        })

    }
    /**Hien thi modal
     Author: HVM:
     Edit: Hien modal*/
    btnAddOnClick() {
        this.showDetailModal();
    }
    /**tat modal
    Author: HVM:
    Edit: Tat modal*/
    btnCancelOnClick() {
        this.hideDetailModal();

    }
    /**tat modal
    Author: HVM:
    Edit: Tat modal*/
    btnCloseOnClick() {
        this.hideDetailModal();
    }
    showDetailModal() {
        $('.modal').show();
        $('.modal-content').show();
    }
    hideDetailModal() {
        $('.modal').hide();
        $('.modal-content').hide();
    }
    btnSaveOnClick() {
        //validate thong tin nhap
            // thu thap thong tin tren form
        // thuc hien cat duw lieuj
        
    }
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