using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Twitter.DBConnection
{
    public class DBOperation: IDBOperation
    {
        string strconString = @"Data Source=LAPTOP-QMV6MK37\SQLEXPRESS2019;Initial Catalog=Test;User id=sa;Password=Welcome@1410;";
        public dynamic GetData(SqlCommand sqlCommand)
        {
            DataTable dtTabelData = new DataTable();
            using (SqlConnection sqlConnection = new SqlConnection(strconString))
            {
                //DataTable dtTabelData = new DataTable();
                try
                {
                    sqlConnection.Open();
                    sqlCommand.Connection = sqlConnection;
                    SqlDataAdapter da = new SqlDataAdapter();
                    da.SelectCommand = sqlCommand;
                    // Retrieving Record from datasource  
                    //SqlDataReader sdr = sqlCommand.ExecuteReader();
                    da.Fill(dtTabelData);
                    // Reading and Iterating Records  
                    // while (sdr.Read())
                    {
                        //user_data.Id = new Guid(sdr[0].ToString());
                        //user_data.Username = sdr[1].ToString();
                        //user_data.password = sdr[2].ToString();
                    }

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
                    if(response == 1)
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
