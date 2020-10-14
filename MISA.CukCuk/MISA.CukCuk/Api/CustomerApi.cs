using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using MySql.Data.MySqlClient;
using MISA.CukCuk.Models;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.CukCuk.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerApi : ControllerBase
    {
        /// <summary>
        /// load du lieu cua bang
        /// Author: HVM(11/10/2020)
        /// </summary>
        /// <returns></returns>
        // GET: api/<CustomerApi>
        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            // lấy dữ liệu từ database;
            // khởi tạo thông tin kết nối
            var customers = new List<Customer>();
            string ConStr = " User Id=nvmanh;Password=12345678@Abc;Host=35.194.166.58;Port=3306;Database=MISACukCuk_F09_DTHA;Character Set=utf8";
            // khởi tạo kết nối
            MySqlConnection con = new MySqlConnection(ConStr);
            con.Open();
            // đồi tượng xu ly command
            MySqlCommand com = con.CreateCommand();
            com.CommandType = CommandType.StoredProcedure;
            com.CommandText = "Proc_GetCustomer";

            // thực hiện đọc dữ liệu
            MySqlDataReader reader = com.ExecuteReader();
            while (reader.Read())
            {
                var customer = new Customer();
                
                for (int i = 0; i < reader.FieldCount; i++)
                {
                    var columnName = reader.GetName(i);
                    var value = reader.GetValue(i);
                    var propertyInfo=customer.GetType().GetProperty(columnName);
                    if(propertyInfo!=null && value != DBNull.Value)
                    {
                        propertyInfo.SetValue(customer, value);
                    }

                }
                

                customers.Add(customer);

            }
            // 1 kết nối database
            //2 thực thi câu lệnh
            // trả về dữ liệu
            con.Close();
            return customers;
        }
        /// <summary>
        /// Them khcah hang moi
        /// Author:HVM(14/03/2020)
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // GET api/<CustomerApi>/5
        [HttpGet("{id}")]
        public Customer Get([FromRoute]Guid id)
        {
            // lấy dữ liệu từ database;
            // khởi tạo thông tin kết nối
            //var customers = new List<Customer>();
            string ConStr = " User Id=nvmanh;Password=12345678@Abc;Host=35.194.166.58;Port=3306;Database=MISACukCuk_F09_DTHA;Character Set=utf8";
            // khởi tạo kết nối
            MySqlConnection con = new MySqlConnection(ConStr);
           
            // đồi tượng xu ly command
            MySqlCommand com = con.CreateCommand();
            com.CommandType = CommandType.StoredProcedure;
            com.CommandText = "Proc_GetCustomerId";
            com.Parameters.AddWithValue("@CustomerId", id);
            // thực hiện đọc dữ liệu
            con.Open();
            MySqlDataReader reader = com.ExecuteReader();
            
            while (reader.Read())
            {
                var customer = new Customer();

                for (int i = 0; i < reader.FieldCount; i++)
                {
                    var columnName = reader.GetName(i);
                    var value = reader.GetValue(i);
                    var propertyInfo = customer.GetType().GetProperty(columnName);
                    if (propertyInfo != null && value != DBNull.Value)
                    {
                        propertyInfo.SetValue(customer, value);
                    }

                }


                return customer;

            }
            // 1 kết nối database
            //2 thực thi câu lệnh
            // trả về dữ liệu
            con.Close();
            return null;
        }
        /// <summary>
        /// update du lieu
        /// Author: HVM(14/10/2020)
        /// </summary>
        /// <param name="customer"></param>
        /// <returns></returns>

        // POST api/<CustomerApi>
        [HttpPost]
        public int Post([FromBody] Customer customer)
        {
            // lấy dữ liệu từ database;
            // khởi tạo thông tin kết nối
            //var customers = new List<Customer>();
            string ConStr = " User Id=nvmanh;Password=12345678@Abc;Host=35.194.166.58;Port=3306;Database=MISACukCuk_F09_DTHA;Character Set=utf8";
            // khởi tạo kết nối
            MySqlConnection con = new MySqlConnection(ConStr);
            
            // đồi tượng xu ly command
            MySqlCommand com = con.CreateCommand();
            com.CommandType = CommandType.StoredProcedure;
            com.CommandText = "Pro_InsertCustomer";
            com.Parameters.AddWithValue("@CustomerId",customer.CustomerId );
            com.Parameters.AddWithValue("@CustomerCode", customer.CustomerCode);
            com.Parameters.AddWithValue("@CustomerName", customer.CustomerName);
            com.Parameters.AddWithValue("@Address", customer.Address);
            com.Parameters.AddWithValue("@Email", customer.Email);
            com.Parameters.AddWithValue("@PhoneNumber", customer.PhoneNumber);
            com.Parameters.AddWithValue("@TaxCode", customer.TaxCode);
            com.Parameters.AddWithValue("@GroupCustomerId", customer.GroupCustomerId);
            com.Parameters.AddWithValue("@CardClassId", customer.CardClassId);
            com.Parameters.AddWithValue("@CustomerCompany", customer.CustomerCompany);
            com.Parameters.AddWithValue("@DebitAmount", customer.DebitAmount);
            com.Parameters.AddWithValue("@Gender", customer.Gender);
            con.Open();
            var afffectRows = com.ExecuteNonQuery();

          

            

            
            // 1 kết nối database
            //2 thực thi câu lệnh
            // trả về dữ liệu
            con.Close();
            return afffectRows;
        }
        /// <summary>
        /// Xoa du lieu
        /// Author:HVM(14/10/2020)
        /// </summary>
        /// <param name="customer"></param>
        /// <returns></returns>
        // PUT api/<CustomerApi>/5
        [HttpPut]
        public int Put([FromBody]Customer customer)
        {
            // lấy dữ liệu từ database;
            // khởi tạo thông tin kết nối
            //var customers = new List<Customer>();
            string ConStr = " User Id=nvmanh;Password=12345678@Abc;Host=35.194.166.58;Port=3306;Database=MISACukCuk_F09_DTHA;Character Set=utf8";
            // khởi tạo kết nối
            MySqlConnection con = new MySqlConnection(ConStr);

            // đồi tượng xu ly command
            MySqlCommand com = con.CreateCommand();
            com.CommandType = CommandType.StoredProcedure;
            com.CommandText = "Proc_UpdateCustomer";
            com.Parameters.AddWithValue("@CustomerId", customer.CustomerId);
            com.Parameters.AddWithValue("@CustomerCode", customer.CustomerCode);
            com.Parameters.AddWithValue("@CustomerName", customer.CustomerName);
            com.Parameters.AddWithValue("@Address", customer.Address);
            com.Parameters.AddWithValue("@Email", customer.Email);
            com.Parameters.AddWithValue("@PhoneNumber", customer.PhoneNumber);
            com.Parameters.AddWithValue("@TaxCode", customer.TaxCode);
            com.Parameters.AddWithValue("@GroupCustomerId", customer.GroupCustomerId);
            com.Parameters.AddWithValue("@CardClassId", customer.CardClassId);
            com.Parameters.AddWithValue("@CustomerCompany", customer.CustomerCompany);
            com.Parameters.AddWithValue("@DebitAmount", customer.DebitAmount);
            com.Parameters.AddWithValue("@Gender", customer.Gender);

            con.Open();
            int afffectRows = com.ExecuteNonQuery();
            // 1 kết nối database
            //2 thực thi câu lệnh
            // trả về dữ liệu
            con.Close();
            return afffectRows;
        }
        /// <summary>
        /// xoa khach hang theo id
        /// Author:HVM(14/10/2020)
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // DELETE api/<CustomerApi>/5
        [HttpDelete("{id}")]
        public int Delete(Guid id)
        {
            // lấy dữ liệu từ database;
            // khởi tạo thông tin kết nối
            //var customers = new List<Customer>();
            string ConStr = " User Id=nvmanh;Password=12345678@Abc;Host=35.194.166.58;Port=3306;Database=MISACukCuk_F09_DTHA;Character Set=utf8";
            // khởi tạo kết nối
            MySqlConnection con = new MySqlConnection(ConStr);
            con.Open();
            // đồi tượng xu ly command
            MySqlCommand com = con.CreateCommand();
            com.CommandType = CommandType.StoredProcedure;
            com.CommandText = "Proc_DeleteCustomerId";
            com.Parameters.AddWithValue("@CustomerId", id);
            
            
            var afffectRows = com.ExecuteNonQuery();






            // 1 kết nối database
            //2 thực thi câu lệnh
            // trả về dữ liệu
            con.Close();
            return afffectRows;
        }
    }
}
