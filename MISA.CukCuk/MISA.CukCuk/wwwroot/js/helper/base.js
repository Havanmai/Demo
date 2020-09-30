$(document).ready(function () {


    var base  = new Base();
    //customer.loadData();


})
class Base {
    constructor() {
        debugger;
        this.getData();
        this.loadData();
        this.inintEvent();

    }
    /**
    * các sự kiện
    * Author: HVM 29/09/2020
    * Edit : chức các sự kiện nút*/
    inintEvent() {

        $('#btnAdd').click(this.btnAddOnClick.bind(this));
        $('#btnCancel').click(this.btnCancelOnClick.bind(this));
        $('.close').click(this.btnCloseOnClick.bind(this));
        $('#btnSave').click(this.btnSaveOnClick.bind(this));
        $('#table').on('click', 'tr', this.rowonclick);
        $('#btnReload').click(this.btnReloadOnClick.bind(this));
        $('input[required]').blur(this.checkRequired);
    }

   
    /**
    *   kế thừa
    * Author: HVM 29/09/2020
    * Edit : lấy data cho các lớp con  kế thừa*/
    getData(){
        this.Data = null;
    }
    /**
     * Load dữ liệu 
     * Author: HVM 29/09/2020
     * Edit : load dữ liệu lên bảng*/

    loadData() {
        try {
            
                // đọc thông tin các cột dữ liệu
                var fields = $("#table thead th");
                
            //lấy dữ liệu
            var data = this.Data;
            //var employee = data;
            //đọc dữ liệu ra
            $.each(data, function (index, obj) {
                debugger;
                var tr = $(`<tr></tr>`);
                $.each(fields, function (index, field) {
                    // binding du liệu

                    var fieldName = $(field).attr('fieldName');
                    var value = obj[fieldName];
                    if (fieldName == "Datetime" || fieldName == "DateOfBirth") {
                        var td = $(`<td align="center">` + CommonJs.formatDate(value) + `</td>`);
                    } else if (fieldName == "Salary" || fieldName == "DebitMoney") {
                        var td = $(`<td align="right">` + CommonJs.fomartMoney(value)+ `</td>`);
                    } else if (fieldName == "Mobile" || fieldName == "Code" ) {
                        var td = $(`<td align="center">` + value + `</td>`);
                    }
                    else if (fieldName == "CustomerEmail") {
                        var td = $(`<td  title="` + value + `">` + CommonJs.title(value) + `</td>`);
                    }
                    else {
                        var td = $(`<td>` + value + `</td>`);
                    }
                   
                    $(tr).append(td);
                })
                $('#table tbody').append(tr);
            })
        }
        catch{

        }

    }
    //#region 'Nut sự kiện'

    /**Hien thi modal
     Author: HVM:
     Edit: Hien modal*/
    btnAddOnClick() {
        this.showDetailModal();
        $(this).focus;
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
    /**hiển  modal
    Author: HVM:
    Edit:  bật modal*/
    showDetailModal() {
        $('.modal').show();
        $('.modal-content').show();
    }
    hideDetailModal() {
        $('.modal').hide();
        $('.modal-content').hide();
    }
    /**save thoong tin ở bản trong modal
    Author: HVM:
    Edit: Tat modal*/
    btnSaveOnClick() {
        //validate thong tin nhap
        var inputRequieres = $('[required]');
        var IsValid = true;
        $.each(inputRequieres, function (index, input) {
            debugger;
            var valid = $(input).trigger("blur");
            if (IsValid && valid.hasClass('required-error')) {
                IsValid = false;
            }
        })
        if (!this.checkRequired(inputRequieres)) {
            return;
        }
        
        //// thu thap thong tin tren form
        //if (IsValid) {
        //    var databases = {};
        //    $(databases, function (index, database) {
        //        database = this.value;
        //    })

        //}
        //// thuc hien cat du lieu

    }
    /**
     * kiem tra du lieu rong
     * author: HVM 30/09/2020
     * Edit: kie tra trong du lieu khi nhap vao dialog modal*/
    checkRequired() {
        var value = this.value;
        if (!value) {
            $(this).addClass('required-error');
            $(this).attr("title", "Ban phai nhap thong tin");
            return;

        }
        else {
            $(this).removeClass('required-error');
            $(this).removeAttr("title", "Ban phai nhap thong tin");
            
        }

    }

    rowonclick() {
        $(this).siblings().removeClass('row-selected');
        $(this).addClass('row-selected');
    }
    /**load lai du lieu
     * author: HVM 29/09/2020
     * edit: load du lieu nut nap*/
    btnReloadOnClick() {
        this.loadData();

    }
    //#endregion 'Nut sự kiện'
}
    /**dữ liệu ảo
     * author: HVM 29/09/2020
     * edit: dữ liệu ảo  với 100 bản ghis*/
var data = [];
for (var i = 0; i < 100; i++) {
    var employee = {
        EmployeeCode: "KH00" + i + 1,
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

