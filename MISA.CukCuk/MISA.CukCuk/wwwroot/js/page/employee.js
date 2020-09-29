$(document).ready(function () {


    var employee = new Employee();
    //customer.loadData();


})
class Employee extends Base {
    constructor() {
        super();

    }
    getData() {
        this.Data = data;
    }
}
//    inintEvent() {

//        $('#btnAdd').click(this.btnAddOnClick.bind(this));
//        $('#btnCancel').click(this.btnCancelOnClick.bind(this));
//        $('.close').click(this.btnCloseOnClick.bind(this));
//        $('#btnSave').click(this.btnSaveOnClick.bind(this));
//        $('#table').on('click', 'tr', this.rowonclick);
//        $('btnReload').click(this.btnReloadOnClick.bind(this));
//    }
    
//    //loadData() {
//    //    try {
//    //        //lấy dữ liệu
//    //        var employee = data;
//    //        //đọc dữ liệu ra
//    //        $.each(employee, function (index, employee) {
//    //            // binding du liệu
//    //            var trHTML = $(`<tr>
//    //                  <td>`+ employee["EmployeeCode"] + `</td>
//    //                  <td>`+ employee["EmployeeName"] + `</td>
//    //                  <td >`+ employee["Gender"] + `</td>
//    //                  <td align="center">`+ employee["DateOfBirth"] + `</td>
//    //                  <td align="center">`+ employee["Mobile"] + `</td>
//    //                  <td  title="`+ employee["PositionName"] + `">` + employee["PositionName"].slice(0, 5) + `...` + `</td>
//    //                  <td >`+ employee["DepartmentsName"] + `</td>
//    //                  <td >`+ employee["Email"] + `</td>
//    //                  <td align="right">`+ CommonJs.fomartMoney(employee["Salary"]) + `</td>
//    //                  <td align="center">`+ employee["WorkStatus"] + `</td>
//    //             </tr>`);
//    //            $('#table tbody').append(trHTML);
//    //        })
//    //    }
//    //    catch{

//    //    }

//    }

//    /**Hien thi modal
//     Author: HVM:
//     Edit: Hien modal*/
//    btnAddOnClick() {
//        this.showDetailModal();
//    }
//    /**tat modal
//    Author: HVM:
//    Edit: Tat modal*/
//    btnCancelOnClick() {
//        this.hideDetailModal();

//    }
//    /**tat modal
//    Author: HVM:
//    Edit: Tat modal*/
//    btnCloseOnClick() {
//        this.hideDetailModal();
//    }
//    /**hiển  modal
//    Author: HVM:
//    Edit: Tat modal*/
//    showDetailModal() {
//        $('.modal').show();
//        $('.modal-content').show();
//    }
//    hideDetailModal() {
//        $('.modal').hide();
//        $('.modal-content').hide();
//    }
//    /**save thoong tin ở bản trong modal
//    Author: HVM:
//    Edit: Tat modal*/
//    btnSaveOnClick() {
//        //validate thong tin nhap
//        // thu thap thong tin tren form
//        // thuc hien cat du lieu

//    }

//    rowonclick() {
//        $(this).siblings().removeClass('row-selected');
//        $(this).addClass('row-selected');
//    }
//    /**load lai du lieu
//     * author: HVM 29/09/2020
//     * edit: load du lieu nut nap*/
//    btnReloadOnClick() {
//        this.loadData();

//    }
//}
var data = [];
for (var i = 0; i < 100; i++) {
    var employee = {
        EmployeeCode: "KH00" + i+1,
        EmployeeName: "Linh Trang Nguyen",
        Gender: "Nữ",
        DateOfBirth: "29/08/1998",
        Mobile: "0123654789",
        PositionName: "Giám đốc",
        DepartmentsName: "Phòng đào tạo",
        Email: "Ninh Binh",
        Salary: "10000000",
        WorkStatus: "Đang làm việc",
    };
    data.push(employee);

}

//var data = [
//    {
//        EmployeeCode: "KH001",
//        EmployeeName: "Linh Trang Nguyen",
//        Gender: "Nữ",
//        DateOfBirth: "29/08/1998",
//        Mobile: "0123654789",
//        PositionName: "Giám đốc",
//        DepartmentsName: "Phòng đào tạo",
//        Email: "Ninh Binh",
//        Salary: "10000000",
//        WorkStatus: "Đang làm việc",
//    },
//    {
//        EmployeeCode: "KH001",
//        EmployeeName: "Linh Trang Nguyen",
//        Gender: "Nữ",
//        DateOfBirth: "29/08/1998",
//        Mobile: "0123654789",
//        PositionName: "Giám đốc",
//        DepartmentsName: "Phòng đào tạo",
//        Email: "Ninh Binh",
//        Salary: "10000000",
//        WorkStatus: "Đang làm việc",
//    },
//    {
//        EmployeeCode: "KH001",
//        EmployeeName: "Linh Trang Nguyen",
//        Gender: "Nữ",
//        DateOfBirth: "29/08/1998",
//        Mobile: "0123654789",
//        PositionName: "Giám đốc",
//        DepartmentsName: "Phòng đào tạo",
//        Email: "Ninh Binh",
//        Salary: "10000000",
//        WorkStatus: "Đang làm việc",
//    }
//]