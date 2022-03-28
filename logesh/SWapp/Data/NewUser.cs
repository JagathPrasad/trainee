using SWapp.Model;
using System.Data.SqlClient;
using SWapp.DBConnection;
using System.Data;

namespace SWapp.Data
{
   /* public class NewUser
    {
       // string connectionString = "data source=LAPTOP-4HJUNB7H\\SQLEXPRESS;initial catalog=swiggy;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;";

       *//* public bool Register(Guid id, string name, string password, bool isActive, DateTime createdOn, string mobile)
        {
            bool isSuccess = false;


            try
            {
                using (SqlConnection con = new SqlConnection(connectionString))
                {
                    // Insert query  
                    using (SqlCommand cmd = new SqlCommand("Newuser"))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Connection = con;
                        // opening connection  
                        con.Open();
                        // Passing parameter values  
                        cmd.Parameters.AddWithValue("@Id", id);
                        cmd.Parameters.AddWithValue("@name", name);
                        cmd.Parameters.AddWithValue("@password", password);
                        cmd.Parameters.AddWithValue("@IsActive", isActive);
                        cmd.Parameters.AddWithValue("@CreatedOn", createdOn);
                        cmd.Parameters.AddWithValue("@MOBILE", mobile);

                        isSuccess=cmd.ExecuteNonQuery()==1 ? true : false;
                        // cmd.ExecuteNonQuery();

                    }
                }
            }
            catch (Exception ex)
            {

                throw ex;
            }

            return isSuccess;
        }
    }*//*
    public bool Register(Guid id, string name, string password, bool isActive, DateTime createdOn, string mobile)
    {
        DBAccess dbOperation = new DBAccess();
        SqlCommand sqlCommand = new SqlCommand("Newuser");
        sqlCommand.CommandType = CommandType.StoredProcedure;
        sqlCommand.Parameters.AddWithValue("@Id", id);
        sqlCommand.Parameters.AddWithValue("@name", name);
        sqlCommand.Parameters.AddWithValue("@password", password);
        sqlCommand.Parameters.AddWithValue("@IsActive", isActive);
        sqlCommand.Parameters.AddWithValue("@CreatedOn", createdOn);
        sqlCommand.Parameters.AddWithValue("@MOBILE", mobile);

        return dbOperation.SaveData(sqlCommand);
    }
}*/
}
