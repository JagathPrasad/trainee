using System.Data;
using System.Data.SqlClient;

namespace SWapp.DBConnection
{
    public class DBAccess : IDBAccess
    {
        string connectionString = "data source=LAPTOP-4HJUNB7H\\SQLEXPRESS;initial catalog=swiggy;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;";

        public bool SaveData(SqlCommand sqlCommand)
        {
            using (SqlConnection sqlConnection = new SqlConnection(connectionString))
            {
                try
                {
                    sqlConnection.Open();
                    sqlCommand.Connection = sqlConnection;
                    int response = sqlCommand.ExecuteNonQuery();
                    if (response == 1)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
                catch (Exception ex)
                {
                    // errorLog = new ErrorLog(ex);
                    //ErrorLog.Log(ex);
                    return false;
                }
                finally
                {
                    if (sqlConnection.State == ConnectionState.Open) sqlConnection.Close();
                }
            }
        }

        public dynamic GetData(SqlCommand sqlCommand)
        {
            DataTable dtTabelData = new DataTable();
            using (SqlConnection sqlConnection = new SqlConnection(connectionString))
            {
                
                try
                {
                    sqlConnection.Open();
                    sqlCommand.Connection = sqlConnection;
                    SqlDataAdapter da = new SqlDataAdapter();
                    da.SelectCommand = sqlCommand;
                    da.Fill(dtTabelData);
                    // SqlDataReader sdr = sqlCommand.ExecuteReader();
                    //sqlCommand.ExecuteReader()

                }
                catch (Exception ex)
                {
                    //ErrorLog.Log(ex);
                    //errorLog = new ErrorLog(ex);

                }
                finally
                {
                    if (sqlConnection.State == ConnectionState.Open) sqlConnection.Close();
                }



                return dtTabelData;
            }







        }

    }
}

