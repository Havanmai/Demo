using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MISA.CukCuk.Models
{
    public class Department
    {
        public Department()
        {
            DepartmentId = Guid.NewGuid();
        }
        public Guid DepartmentId { get; set; }
        public string DepartmentCode { get; set; }
        public string DepartmentName { get; set; }
        public DateTime CreateDate { get; set; }
        public string CreateBy { get; set; }
        public DateTime ModifiedDay { get; set; }
        public string ModifiedBy { get; set; }
    }
}
