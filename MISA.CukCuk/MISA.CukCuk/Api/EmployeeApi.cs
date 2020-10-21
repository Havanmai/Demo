﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using MySql.Data.MySqlClient;
using MISA.Common.Models;
using MISA.Business.Interface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MISA.CukCuk.Api
{
    [Route("api/employees")]
    [ApiController]
    public class EmployeeApi : BaseApi<Employee>
    {
       public EmployeeApi(IBaseService<Employee> employeeService) : base(employeeService)
        {


        }

    }
}
