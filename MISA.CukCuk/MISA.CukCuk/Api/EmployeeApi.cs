using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using MySql.Data.MySqlClient;
using MISA.Common.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.CukCuk.Api
{
    [Route("api/employees")]
    [ApiController]
    public class EmployeeApi : ControllerBase
    {
        
        // GET: api/<EmployeeApi>
        [HttpGet]
        public IEnumerable<Employee> Get()
        {
            
            //lấy dữ liệu từ database;
            // khởi tạo thông tin kết nối
            string ConStr = "";
            // khởi tạo kết nối
            MySqlConnection con= new MySqlConnection(ConStr);
            con.Open();
            // đồi tượng xu ly command
            MySqlCommand com = con.CreateCommand();
            com.CommandType = CommandType.Text;
            com.CommandText = "";
           
            // thực hiện đọc dữ liệu
            MySqlDataReader reader = com.ExecuteReader();
            while (reader.Read())
            {
                var emplyee = new Employee();
                for(int i = 0; i<reader.FieldCount; i++)
                {
                    var columnName = reader.GetName(i);
                    var value = reader.GetValue(i);
                    emplyee.GetType().GetProperty(columnName);

                    
                }
             
                foreach (var item in reader)
                {
                    var abc = 1;

                }

            }
            // 1 kết nối database
            //2 thực thi câu lệnh
            // trả về dữ liệu
            con.Close();
            return null;

        }

        // GET api/<EmployeeApi>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<EmployeeApi>
        [HttpPost]
        public int Post([FromBody] Customer customer)
        {
            return 1;
        }

        // PUT api/<EmployeeApi>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<EmployeeApi>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
