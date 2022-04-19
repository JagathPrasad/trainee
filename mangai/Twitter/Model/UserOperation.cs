using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Twitter.DBConnection;

namespace Twitter.Model
{
    public class UserOperation
    {
        // string strconString = @"Data Source=LAPTOP-QMV6MK37\SQLEXPRESS2019;Initial Catalog=Test;User id=sa;Password=Welcome@1410;";

        //public Users exist(string Username, string password)
        //{
        //    Users user_data = new Users();
        //    try
        //    {
        //        using (SqlConnection con = new SqlConnection(strconString))
        //        {
        //            // Insert query  
        //            using (SqlCommand cmd = new SqlCommand("spGetUserlogin"))
        //            {
        //                cmd.CommandType = System.Data.CommandType.StoredProcedure;
        //                cmd.Connection = con;
        //                // opening connection  
        //                con.Open();
        //                // Passing parameter values  

        //                cmd.Parameters.AddWithValue("@Username", Username);
        //                cmd.Parameters.AddWithValue("@password", password);
        //                {
        //                    // Retrieving Record from datasource  
        //                    SqlDataReader sdr = cmd.ExecuteReader();
        //                    // Reading and Iterating Records  
        //                    while (sdr.Read())
        //                    {
        //                        user_data.Id = new Guid(sdr[0].ToString());
        //                        user_data.Username = sdr[1].ToString();
        //                        user_data.password = sdr[2].ToString();
        //                    }
        //                }
        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }

        //    return user_data;
        //}

        //internal object Userexist(string Username, string password)
        //{
        //    throw new NotImplementedException();
        //}

        public Users Userexist(string username, string password)
        {
            try
            {
                Users user_data = new Users();
                DBOperation dbOperation = new DBOperation();
                SqlCommand sqlCommand = new SqlCommand("spGetUserlogin");
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@Username", username);
                sqlCommand.Parameters.AddWithValue("@password", password);
                DataTable user_table = dbOperation.GetData(sqlCommand);
                //SqlDataReader sdr = sqlCommand.ExecuteReader();

                    foreach (DataRow row in user_table.Rows)
                {
                    user_data.Username = Convert.ToString(row["Username"]);
                    user_data.password = Convert.ToString(row["password"]);


                }
                return user_data;
            }

            catch (Exception ex)
            {
                throw ex;
            }

        }

        public dynamic Adduser(Guid Id, string Email, string password, string Fristname, string Lastname)
        {
            try
            {
                DBOperation dbOperation = new DBOperation();
                SqlCommand sqlCommand = new SqlCommand("spAddUser");
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@Id", Id);
                sqlCommand.Parameters.AddWithValue("@Email", Email);
                sqlCommand.Parameters.AddWithValue("@Password", password);
                sqlCommand.Parameters.AddWithValue("@Fristname", Fristname);
                sqlCommand.Parameters.AddWithValue("@Lastname", Lastname);

                return dbOperation.SaveData(sqlCommand);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


    }



}




public class Users
{
    internal string user_id;
    internal string post_id;

    public string Username { get; internal set; }
    public string password { get; internal set; }
    public string Comment_text { get; internal set; }
}