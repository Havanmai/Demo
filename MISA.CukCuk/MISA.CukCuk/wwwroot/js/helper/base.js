$(document).ready(function () {


   


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
        $('#btnChange').click(this.btnChangeOnClick.bind(this));
        $('#btnDelete').click(this.btnDeleteOnClick.bind(this));
        $('input[required]').blur(this.checkRequired);
        $('input[typeof]').blur(this.checkTypeOf);
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
        
        $.ajax({

            url: "/api/CustomerApi",
            method: "get",
            data: "",// tham số sẽ truyền qua body request
            contentType: "application/json",// 
            dataType: ""
            // co the dung de check lay đc api chưa

            //success: function () {

            //},
            //fail: function () {

            //} 

        }).done(function (response) {
            debugger;
            try {
                // xoas trong bang truoc khi load du lieu
                $("#table tbody").empty();
                // đọc thông tin các cột dữ liệu
                var fields = $("#table thead th");
                var keyId = $('#table tbody tr.row-selected').attr('keyId');
                //console.log(keyId);
                debugger;
                //lấy dữ liệu
                var data = this.Data;
                //var employee = data;
                //đọc dữ liệu ra
                $.each(response, function (index, obj) {
                    debugger;
                    var tr = $(`<tr keyId=` + obj.customerId + `></tr>`);
                    debugger;
                    $.each(fields, function (index, field) {
                        // binding du liệu
                        //TODO: them 1 truong chung voi ca thuoc tinh chung cua cac doi tuong de rut gon va tranh code xau
                        var fieldName = $(field).attr('fieldName');
                        var value = obj[fieldName];

                        if (fieldName == "postedDate" ) {
                            var td = $(`<td align="center" >` + CommonJs.formatDate(value) + `</td>`);
                        } else if (fieldName == "debitAmount") {
                            var td = $(`<td align="right">` + CommonJs.fomartMoney(value) + `</td>`);
                        } else if (fieldName == "phoneNumber" || fieldName == "taxCode") {
                            var td = $(`<td align="center">` + value + `</td>`);
                        }
                        else if (fieldName == "email") {
                            var td = $(`<td  title="` + value + `">` + CommonJs.title(value) + `</td>`);
                        }
                        else {
                            var td = $(`<td >` + value + `</td>`);
                        }
                        //var td = $(`<td >` + value + `</td>`);
                        debugger
                        $(tr).data('keyId', obj[keyId]);
                        $(tr).data('data', obj);
                        $(tr).append(td);

                        debugger;
                    })
                    $('#table tbody').append(tr);
                })
            }
            catch (e) {

            }
        

        }).fail(function (response) {

        })
       


        // lấy dữ liệu thông qua lời gọi từ api
        

    }
    //#region 'Nut sự kiện'

    /**Hien thi modal
     Author: HVM:
     Edit: Hien modal*/
    btnAddOnClick() {
        var self = this;
        
        self.showDetailModal();
        self.FormMode = "Add";
        $(self).focus;
        
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
        //var Isemail=true
        //var self = this;
        var self = this;
        
        $.each(inputRequieres, function (index, input) {
            
            var valid = $(input).trigger("blur");
           
                if ( IsValid && valid.hasClass('required-error')) {
                    
                    //if (IsValid && valid.hasClass('required-error') ) {
                    IsValid = false;
                }
                else {

                    IsValid = true;
                }
            
        })
        
       
        //if (!this.checkRequired(inputRequieres)) {
        //    debugger
        //    return IsValid = true ;
        //}
        // thu thap thong tin tren form
        if (IsValid) {
            var inputs = $('#modal tr td input[fieldName]');
            var object = {};
            //var id = $('#table tbody tr.row-selected').attr('keyId');
            //var objectDetail = $('#table tbody tr.row-selected').data('data');

            $.each(inputs, function (index, input) {

                var fieldName = $(input).attr('fieldName');
                var value = $(input).val();
                //console.log(value);
                debugger;
                object[fieldName] = value;
              

                //$(tr).append(td);
                
                
            })
            if (self.FormMode == 'Add') {
                data.push(object);
                alert('add');
            } else {
                //data.push(object);
                debugger;
                alert('edit');
            }
            // gọi service thực hiện lưu dữ liệu
            // cat du lieu
            
            debugger;
            // load lai du lieu dong thoi tat dialog modal
            self.loadData();
            self.btnCloseOnClick();

        }
        // thuc hien cat du lieu
        
        
    }
    /** ham cho nut sua
     * author: HVM 05/10/2020
     * edit:chi tiet nut sua thong tin trong bang content
     * */
    btnChangeOnClick() {
        this.FormMode = "Edit";
        // lay thong tin ban ghi da chon trong danh sach
        var recordSelected = $('#table tbody tr.row-selected');
        console.log(recordSelected);
        // lay du lieu thong tin cua danh sachs
        debugger;
        var id = recordSelected.attr('keyId');
        console.log(id);
        var objectDetail = recordSelected.data('data');
      
       
        // binding du lieu vao input tương ung tren form chi tiet:
        // building du lieu can luu
       
            var inputs = $('#modal tr td input[fieldName]');


            $.each(inputs, function (index, input) {

                var fieldName = $(input).attr('fieldName');
                input.value = objectDetail[fieldName];
                if ($(input).attr('type')=='date') {
                    input.value = CommonJs.formatDate(objectDetail[fieldName]);
                    debugger;
                }
                debugger;
            })
        

        this.showDetailModal();
    }
    /** ham cho nut xoa
     * author: HVM 05/10/2020
     * edit:chi tiet nut xoa thong tin trong bang content
     * */
    btnDeleteOnClick() {
        // lay thong tin ban ghi da chon trong danh sach
        var recordSelected = $('#table tbody tr.row-selected');
        console.log(recordSelected);
        // lay du lieu thong tin cua danh sachs
        debugger;
        var id = recordSelected.attr('keyId');
        console.log(id);
        
        // hien thi thong tin xoa
        var result = confirm('ban co muon xoa khong?');

        //thuc hien xoa khi nhan oke
        if (result) {
            debugger;
            data.pop();

        }

    }
    /**
     * kiem tra du lieu rong
     * author: HVM 30/09/2020
     * Edit: kie tra trong du lieu khi nhap vao dialog modal*/
    checkRequired() {
        var value = this.value;
        if (!value || value == 0 || value == "" || !(value && value.trim())) {
            $(this).addClass('required-error');
            $(this).attr("title", "Ban phai nhap thong tin");
            return;

        }
        else {
            $(this).removeClass('required-error');
            $(this).removeAttr("title", "Ban phai nhap thong tin");
            
        }

    }
    /**
    * kiem tra du lieu truong email
    * author: HVM 05/10/2020
    * Edit: kiem tra trong du lieu khi nhap vao email cos ddungs dinh dang hay khong*/
    checkTypeOf() {
        var value = this.value;
        if (!CommonJs.isInvalidEmail(value)) {
            $(this).addClass('required-error');
            $(this).attr("title", "Ban phai nhap dung thong tin email");
            return;

        }
        else {
            $(this).removeClass('required-error');
            $(this).removeAttr("title", "Ban phai nhap dung thong tin email");

        }

    }
    /**chon hang
     * author: HVM 29/09/2020
     * edit: xac dinh hang duoc chon*/

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
    //getRecorddata() {
    //    // lay thong tin ban ghi da chon trong danh sach
    //    var recordSelected = $('#table tbody tr.row-selected');
    //    console.log(recordSelected);
    //    // lay du lieu thong tin cua danh sachs
    //    var id = recordSelected.data('keyId');

    //    return id;
    //}
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

