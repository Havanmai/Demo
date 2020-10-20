class Base {
    constructor() {

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
    getData() {
        this.Data = [];
    }
    /**
     * Load dữ liệu 
     * Author: HVM 29/09/2020
     * Edit : load dữ liệu lên bảng*/

    loadData() {

        var getUrl = $("#table thead tr").attr('url');
        console.log(getUrl);
        $.ajax({

            url: "/api/" + getUrl,
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

            try {
                // xoas trong bang truoc khi load du lieu
                $("#table tbody").empty();
                // đọc thông tin các cột dữ liệu
               
                var fields = $("#table thead th");
                var keyId = $('#table tbody tr.row-selected').attr('keyId');
                
                var data = this.Data;
                //lấy dữ liệu
                
                //đọc dữ liệu ra
                $.each(response, function (index, obj) {
                    var tr = $(`<tr></tr>`);
                    $.each(fields, function (index, field) {
                        // binding du liệu
                        //TODO: them 1 truong chung voi ca thuoc tinh chung cua cac doi tuong de rut gon va tranh code xau
                        var fieldName = $(field).attr('fieldName');
                        var value = obj[fieldName];
                        if (fieldName == "postedDate" || fieldName == "dateOfBirth") {
                            var td = $(`<td align="center" >` + CommonJs.formatDate(value) + `</td>`);
                        } else if (fieldName == "debitAmount" || fieldName == "salary") {
                            var td = $(`<td align="right">` + CommonJs.fomartMoney(value) + `</td>`);
                        } else if (fieldName == "phoneNumber") {
                            var td = $(`<td align="center">` + value + `</td>`);
                        }
                        else if (fieldName == "email") {
                            var td = $(`<td  title="` + value + `">` + CommonJs.title(value) + `</td>`);
                        }
                        else {
                            var td = $(`<td >` + value + `</td>`);
                        }
                        //var td = $(`<td >` + value + `</td>`);
                        $(tr).data('key', obj[Object.keys(obj)[0]]);
                        $(tr).append(td);
                    })
                    $('#table tbody').append(tr);
                })
            }
            catch (e) {
                console.log(e);
            }


        }).fail(function (response) {

        })



        // lấy dữ liệu thông qua lời gọi từ api


    }
    loadDataDepartment() {

        $.ajax({

            url: "/api/Department",
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
            $.each(response, function (i, department) {
               
                $("#departmentName").append($('<option></option>').val(department.departmentId).text(department.departmentName));
            })
        }).fail(function (response) {

        })
    }
    loadDataPosition() {

        $.ajax({

            url: "/api/Position",
            method: "get",
            data: "",// tham số sẽ truyền qua body request
            contentType: "application/json",// 
            dataType: ""

        }).done(function (response) {
            $.each(response, function (i, position) {
               
                $("#positionName").append($('<option></option>').val(position.positionId).text(position.positionName));
            })
        }).fail(function (response) {

        })
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
        $('.modal-content').show(function () {
            $("#txtEmployeeCode").focus();
        });
        this.loadDataDepartment();
        this.loadDataPosition();
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
        var inputRequieres = $('input[required]');
        var IsValid = true; 
        var self = this;

        $.each(inputRequieres, function (index, input) {

            var valid = $(input).trigger("blur");

            if (IsValid && valid.hasClass('required-error')) {

                IsValid = false;
            }
            else {

                IsValid = true;
            }

        })
        // thu thap thong tin tren form
        if (IsValid) {
            var inputs = $('#modal tr td [fieldName]');
            var object = {};
            //var id = $('#table tbody tr.row-selected').attr('keyId');
            //var objectDetail = $('#table tbody tr.row-selected').data('data');

            $.each(inputs, function (index, input) {

                var fieldName = $(input).attr('fieldName');

                var value = $(input).val();

                if (fieldName == 'salary') {
                    var value = parseFloat($(input).val());
                }
                else if (fieldName == 'workStatus') {
                    var value = parseFloat($(input).val());
                } else if (fieldName == 'gender') {
                    var value = parseFloat($(input).val());
                }
                object[fieldName] = value;
                //debugger;
            })


            if (self.FormMode == 'Add') {

                var getUrl = $("#table thead tr").attr('url');
                //alert('add');
                $.ajax({
                   
                    url: "/api/" + getUrl,
                    method: "POST",
                    data: JSON.stringify(object),
                    contentType: "application/json",
                    dataType: "json"
                }).done(function (res) {
                   
                    alert("Thêm thành công");
                    self.loadData();
                    self.btnCloseOnClick();
                }).fail(function (res) {

                })
            } else {

                alert('edit');
                //var getUrl = $("#table thead tr").attr('url');
                ////alert('add');
                //$.ajax({
                //    method: "PUT",
                //    url: "/api/" + getUrl,
                //    data: JSON.stringify(object),
                //    contentType: "application/json",
                //    dataType: "json"
                //}).done(function (res) {
                //    self.loadData();
                //    self.btnCloseOnClick();
                //}).fail(function (res) {

                //})

            }
            // gọi service thực hiện lưu dữ liệu
            // cat du lieu

           
            // load lai du lieu dong thoi tat dialog modal
            

        }
        // thuc hien cat du lieu

    }

    /** ham cho nut sua
     * author: HVM 05/10/2020
     * edit:chi tiet nut sua thong tin trong bang content
     * */
    btnChangeOnClick() {
       
        var self = this;
        self.FormMode = "Edit";
        // lay thong tin ban ghi da chon trong danh sach
        var recordSelected = $('#table tbody tr.row-selected');
        //self.selectId = recordSelected.data('data');
        self.selectId = recordSelected.data('key');
        // binding du lieu vao input tương ung tren form chi tiet:
        // building du lieu can luu
        self.getDetailDataId(self.selectId);
        var objectDetail = self.object;
        self.showDetailModal();

        var inputs = $('#modal tr td [fieldName]');


        $.each(inputs, function (index, input) {

            var fieldName = $(input).attr('fieldName');

            //if ($(input).attr('type')=='date') {
            //    input.value = CommonJs.formatDate(objectDetail[fieldName]);

            //}
            
            if (fieldName == "postedDate" || fieldName == "dateOfBirth" || fieldName == "indentityDate" || fieldName == "joinDate") {
                input.value = CommonJs.formatDatel(objectDetail[fieldName]);
                debugger;
            } else if (fieldName == "debitAmount" || fieldName == "salary") {
                input.value = CommonJs.fomartMoney(objectDetail[fieldName]);
            }
            else {
                input.value = objectDetail[fieldName];
            }

        })



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

        var id = recordSelected.attr('keyId');
        console.log(id);

        // hien thi thong tin xoa
        var result = confirm('ban co muon xoa khong?');

        //thuc hien xoa khi nhan oke
        if (result) {

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
            return false;

        }
        else {
            $(this).removeClass('required-error');
            $(this).removeAttr("title", "Ban phai nhap thong tin");
            return true;
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
    getRecordIdSelected() {
        //Lấy id của bản ghi được chọn
        var rowId = null;
        var recordSelected = $('#table tbody .row-selected');
        //Lấy dữ liệu chi tiết của bản ghi đó
        if (recordSelected.length > 0) {
            rowId = $(recordSelected).data("keyId");
        }
        return rowId;
    }
    //#endregion 'Nut sự kiện'
}


/**dữ liệu ảo
 * author: HVM 29/09/2020
 * edit: dữ liệu ảo  với 100 bản ghis*/
var data = [];
//for (var i = 0; i < 100; i++) {
//    var employee = {
//        EmployeeCode: "KH00" + i + 1,
//        EmployeeName: "Linh Trang Nguyen",
//        Gender: "Nữ",
//        DateOfBirth: "29/08/1998",
//        Mobile: "0123654789",
//        PositionName: "Giám đốc",
//        DepartmentsName: "Phòng đào tạo",
//        Email: "Ninh Binh",
//        Salary: "10000000",
//        WorkStatus: "Đang làm việc",
//    };
//    data.push(employee);

//}

