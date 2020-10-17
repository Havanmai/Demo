
using MISA.Common.Models;
using MISA.DataAccess.DatabaseAccess;
using MISA.DataAccess.Interface;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;


namespace MISA.DataAccess
{
    public class DatabaseMariaDBAccess:DatabaseContext<Customer>
    {
       
    }
}
