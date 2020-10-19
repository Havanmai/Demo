using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MISA.Common.Models
{
    public class Position
    {
        public Position()
        {
            PositionId = Guid.NewGuid();
        }
        public Guid PositionId { get; set; }
        
        public string PositionCode { get; set; }
        public string PositionName { get; set; }
        public DateTime CreateDate { get; set; }
        public string CreateBy { get; set; }
        public DateTime ModifiedDay { get; set; }
        public string ModifiedBy { get; set; }
    }
}
