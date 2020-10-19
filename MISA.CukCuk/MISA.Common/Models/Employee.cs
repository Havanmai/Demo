using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MISA.Common.Models
{
    public class Employee
    {
        public Guid EmployeeId { get; set; }
        public string EmployeeCode { get; set; }
        public string EmployeeName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Gender { get; set; }
        public string GenderName
        {
            get
            {
                switch (Gender)
                {
                    case 0:
                        return "Nữ";
                    case 1:
                        return "Nam";
                    case 2:
                        return "Khác";
                    default:
                        return "Không xác định";


                }
            }
        }

        public string Email { get; set; }
        public string PhoneNumber { get; set; } 
        public DateTime  IndentityDate { get; set; }
        public string IndentityPlace { get; set; }
        public Guid PositionId { get; set; }
        public Guid DepartmentId { get; set; }
        public string PositionName { get; set; }
        public string DepartmentName { get; set; }
        public double Salary { get; set; }
        public DateTime JoinDate { get; set; }
        public int WorkStatus { get; set; }
        public DateTime CreateDate { get; set; }
        public string CreateBy { get; set; }
        public DateTime  ModifiedDay { get; set; }
        public string ModifiedBy { get; set; }
    }
}
