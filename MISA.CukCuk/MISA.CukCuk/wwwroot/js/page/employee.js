$(document).ready(function () {


    var employee = new Employee();
    //customer.loadData();


})
class Employee extends Base {
    constructor() {
        super('employee');

    }
    getData() {
        this.Data = data;
    }
    getDetailDataId(employeeId) {
        var self = this;
        $.ajax({

            url: "/api/employees/" + employeeId,
            method: "get",
            data: "",// tham số sẽ truyền qua body request
            contentType: "application/json",// 
            dataType: "",
            async: false

        }).done(function (response) {
            self.object = response;
        }).fail(function (response) {

        })
    }
    DeleteId(employeeId) {
        var self = this;
        $.ajax({

            url: "/api/employees/" + employeeId,
            method: "delete",
            data: "",// tham số sẽ truyền qua body request
            contentType: "application/json",// 
            dataType: "",
            async: false

        }).done(function (response) {
            alert("Xóa thành công");
            self.loadData();
        }).fail(function (response) {

        })
    }
}
