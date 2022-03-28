using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Twitter.DBConnection
{
    public interface IDBOperation
    {
        dynamic GetData(SqlCommand sqlCommand);

        bool SaveData(SqlCommand sqlCommand);
    }
}
