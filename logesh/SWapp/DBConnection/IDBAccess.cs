using System.Data.SqlClient;

namespace SWapp.DBConnection
{
    public interface IDBAccess
    {
        bool SaveData(SqlCommand sqlCommand);
        dynamic GetData(SqlCommand sqlCommand);
    }
}
