using System.Data.SqlClient;

namespace linkedInWebAPI.DBConnection
{
    public interface IDBOperation
    {
        dynamic GetData(SqlCommand sqlCommand);
        bool SaveData(SqlCommand sqlCommand);
    }
}
