using System.Data;
using System.Data.SqlClient;

namespace linkedInWebAPI.DBConnection
{
    public class DBOperation : IDBOperation
    {
        string strconString = "data source=LAPTOP-D4EI0KO2\\ANUSHA;initial catalog=LinkedIn;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;";
        public dynamic GetData(SqlCommand sqlCommand)
        {
            DataTable dtTabelData = new DataTable();
            using (SqlConnection sqlConnection = new SqlConnection(strconString))
            {
                
                try
                {
		
                    sqlConnection.Open();
                    sqlCommand.Connection = sqlConnection;
                    SqlDataAdapter da = new SqlDataAdapter();
                    da.SelectCommand = sqlCommand;
                    // Retrieving Record from datasource  
                    //sdr = sqlCommand.ExecuteReader();
                    da.Fill(dtTabelData);
                    // Reading and Iterating Records  
                    //    while (sdr.Read())
                    //    {
                    //        //user_data.Id = new Guid(sdr[0].ToString());
                    //        //user_data.Emaild = sdr[1].ToString();
                    //        //user_data.Password = sdr[2].ToString();
                    //        //user_data.IsActive = Convert.ToBoolean(sdr[5]);
                    //        //user_data.CreatedOn = Convert.ToDateTime(sdr[6]);
                    //}

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


        public bool SaveData(SqlCommand sqlCommand)
        {

            //outPut = null;
            using (SqlConnection sqlConnection = new SqlConnection(strconString))
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
                    //ErrorLog.Log(ex);
                    // errorLog = new ErrorLog(ex);
                    return false;
                }
                finally
                {
                    if (sqlConnection.State == ConnectionState.Open) sqlConnection.Close();
                }
            }
        }

    }
}
