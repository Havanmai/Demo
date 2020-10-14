using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MISA.CukCuk.Models
{
    public class Employee
    {
        public Guid EmployeeId { get; set; }
        public string EmployeeCode { get; set; }
        public string EmployeeName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Gender ;
       
        public string Email { get; set; }
        public string PhoneNumber { get; set; } 
        public DateTime  IndentityDate { get; set; }
        public string IndentityPlace { get; set; }
        public int PositionId { get; set; }
        public int DepartmentId { get; set; }
        public double Salary { get; set; }
        public DateTime JoinDate { get; set; }
        public int WorkStatus { get; set; }
        public DateTime CreateDate { get; set; }
        public string CreateBy { get; set; }
        public DateTime  ModifiedDay { get; set; }
        public string ModifiedBy { get; set; }
    }
}
