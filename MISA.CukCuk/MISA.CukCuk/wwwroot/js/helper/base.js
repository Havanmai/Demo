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
        $('#btnMutil').click(this.btnMutilOnClick.bind(this));
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
    getDataCode() {
        var sefl = this;
        $.ajax({
            url: "/api/employees/GetbyCode",
            method: "get",
            data: "",
            contentType: "application/json", 
            dataType: "",
            async: false
            

        }).done(function (response) {
            console.log(response);
            self.entitycode = response;
        })
            .fail(function (response) {
            })

    }

    //#region Loaddulieu
    /**
     * Load dữ liệu 
     * Author: HVM 29/09/2020
     * Edit : load dữ liệu lên bảng*/

    loadData() {

        var getUrl = $("#table thead tr").attr('url');
       
        $.ajax({

            url: "/api/" + getUrl,
            method: "get",
            data: "",// tham số sẽ truyền qua body request
            contentType: "application/json",// 
            dataType: "",
            async: false,
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


    }
        /*
        *Ham load gia tri phong ban vao select
        Author: HVM:
        Edit: Ham load gia tri phong ban vao select
        */
    loadDataDepartment() {

        $.ajax({

            url: "/api/Department",
            method: "get",
            data: "",// tham số sẽ truyền qua body request
            contentType: "application/json",// 
            dataType: ""

        }).done(function (response) {
            $.each(response, function (i, department) {
               
                $("#departmentName").append($('<option></option>').val(department.departmentId).text(department.departmentName));
            })
        }).fail(function (response) {

        })
    }
    /*
     *Ham load gia tri vi tri vao select
     Author: HVM:
     Edit: Ham load gia tri vi tri vao select
     */ 

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
    //#endregion 


    //#region 'Nut sự kiện'

    /**Hien thi modal
     Author: HVM:
     Edit: Hien modal*/
    btnAddOnClick() {
        var self = this;
        var getUrl = $("#table thead tr").attr('url');
        $.ajax({
            url: "/api/employees/GetbyCode",
            method: "GET"
        }).done(function (response) {
            debugger;
            $("#modal tr td input[fieldname='employeeCode']").val(`NV${CommonJs.getItemCodeNumberIncrea(response)}`)
        }).fail(function (response) {
            console.log(response)
        })
        self.showDetailModal();
       
        self.FormMode = "Add";
        $(self).focus;
       

    }

    /**tat modal
    Author: HVM:
    Edit: Tat modal*/
    btnCancelOnClick() {
        this.Refreshform();
        this.hideDetailModal();

    }
    /**tat modal
    Author: HVM:
    Edit: Tat modal*/
    btnCloseOnClick() {
        this.Refreshform();
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
    /**tat modal
    Author: HVM:
    Edit: Tat modal*/
    hideDetailModal() {
        $('.modal').hide();
        $('.modal-content').hide();
    }



    /** ham nhan ban ban ghi 
     * author: HVM 05/10/2020
     * edit:them moi du lieu ban ghi duoc chonj
     * */


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
                self.showWarning($("#modal tr td input[required]"), "Hãy điền đầy đủ không để trống");
                $("#btnOke").click(function () {
                    $("#dialog-validate").hide();
                    

                });
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

                

                if (fieldName == 'salary') {
                    var value = parseFloat($(input).val());
                }
                else if (fieldName == 'workStatus') {
                    var value = parseFloat($(input).val());
                } else if (fieldName == 'gender') {
                    var value = parseFloat($(input).val());
                } else {
                    var value = $(input).val();
                }
                object[fieldName] = value;
                
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
                    if (response == 0) {
                        self.showWarning($("#modal tr td input[required]"), "Mã nhân viên đã tồn tại");
                        $("#modal tr td input[required]").focus();
                    }
                    else {
                        alert("Thêm thành công");
                        self.loadData();
                       
                        self.btnCloseOnClick();
                    }
                })
                    .fail((response) => {
                        self.showWarning($("#modal tr td input[required]"), response.responseJSON.message)
                        console.log('fail');
                    })
                   
                    
               
            } else if (self.FormMode == 'Edit') {
                self.selectId = $('#table tbody tr.row-selected').data('key');
                
                $.ajax({

                    url: "/api/employees/" + self.selectId,
                    method: "PUT",
                    data: JSON.stringify(object),
                    contentType: "application/json",
                    dataType: "json"
                }).done(function (res) {

                    alert("Sửa thành công");
                    self.loadData();
                   
                    self.btnCloseOnClick();
                   
                }).fail(function (res) {

                })    

            }
        }
       

    }

    /** ham cho nut sua
     * author: HVM 05/10/2020
     * edit:chi tiet nut sua thong tin trong bang content
     * */
    btnChangeOnClick() {
       
        var self = this;
        console.log(self);
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
        $('#dialog-validate').show();
        var self = this;
        var recordSelected = $('#table tbody tr.row-selected');
        console.log(recordSelected);
        // lay du lieu thong tin cua danh sachs

        var id = recordSelected.data('key');
        console.log(id);

        // hien thi thong tin xoa
        var result = confirm('ban co muon xoa khong?');

        //thuc hien xoa khi nhan oke
        if (result) {

            self.DeleteId(id);
            

        }

    }
    /** ham cho nut nap lai du lieu
     * author: HVM 05/10/2020
     * edit:chi tiet nut xoa thong tin trong bang content
     * */
    btnReloadOnClick() {
        this.loadData();

    }
    /**ham cho nut nhan ban du lieu
     * author: HVM 05/10/2020
     * edit:chi tiet nut xoa thong tin trong bang content
     * */
    btnMutilOnClick() {
        var self = this;
        // lay thong tin ban ghi da chon trong danh sach
        var recordSelected = $('#table tbody tr.row-selected');
        //self.selectId = recordSelected.data('data');
        self.selectId = recordSelected.data('key');
        // binding du lieu vao input tương ung tren form chi tiet:
        // building du lieu can luu
        self.getDetailDataId(self.selectId);
        var objectDetail = self.object;
        console.log(objectDetail);
        $.ajax({
            url: "/api/employees/GetbyCode",
            method: "GET",
            async: false
        }).done(function (response) {
            
            var code = $("#modal tr td input[fieldname='employeeCode']").val(`NV${CommonJs.getItemCodeNumberIncrea(response)}`);
            objectDetail.employeeCode = `NV${CommonJs.getItemCodeNumberIncrea(response)}`;
            objectDetail.employeeId = "00000000-0000-0000-0000-000000000000";
            console.log("ssssSS", objectDetail)
        }).fail(response => {
            console.log(response)
        })


        var getUrl = $("#table thead tr").attr('url');
        //alert('add');
        $.ajax({
            url: "/api/" + getUrl,
            method: "POST",
            data: JSON.stringify(objectDetail),
            contentType: "application/json",
            dataType: "json",
            async: false
        }).done(function (res) {

            alert("Nhân bản thành công");
            self.loadData();
            self.btnCloseOnClick();
        }).fail(function (res) {

        })
    }
    //#endregion


    //#region checkform
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
    showWarning(item, content) {
        $("#dialog-validate #bodydaialog .notice-text").html(content)
        this.focusInput = item;
        $("#dialog-validate").show();
        setTimeout(() => $("#dialog-validate #btnOke").focus(), 0);
        item.focus();
    }
    /*
     
     
     */
    Refreshform() {
        $("#modal tr td [fieldname]").val('');
    }
    //#endregion
}



var data = [];
