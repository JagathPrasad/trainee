using linkedInWebAPI.DBConnection;
using linkedInWebAPI.Models;
using System.Data;
using System.Data.SqlClient;

namespace linkedInWebAPI.DataAccessLayer
{
    public class UserOperation
    {
        //string connectionString = "data source=LAPTOP-D4EI0KO2\\ANUSHA;initial catalog=LinkedIn;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;";

        //public User CheckUserExist(string Emaild, string Password)
        //{
        //    User user_data = new User();
        //    try
        //    {
        //        using (SqlConnection con = new SqlConnection(connectionString))
        //        {
        //            // Insert query  
        //            using (SqlCommand cmd = new SqlCommand("CheckUser"))
        //            {
        //                cmd.CommandType = System.Data.CommandType.StoredProcedure;
        //                cmd.Connection = con;
        //                // opening connection  
        //                con.Open();
        //                // Passing parameter values  

        //                cmd.Parameters.AddWithValue("@Emaild", Emaild);
        //                cmd.Parameters.AddWithValue("@Password", Password);

        //                {

        //                    // Retrieving Record from datasource  
        //                    SqlDataReader sdr = cmd.ExecuteReader();
        //                    // Reading and Iterating Records  
        //                    while (sdr.Read())
        //                    {
        //                        user_data.Id = new Guid(sdr[0].ToString());
        //                        user_data.Emaild = sdr[1].ToString();
        //                        user_data.Password = sdr[2].ToString();
        //                        user_data.IsActive = Convert.ToBoolean(sdr[5]);
        //                        user_data.CreatedOn = Convert.ToDateTime(sdr[6]);
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


        public User CheckUserExist(string Emaild, string Password)
        {
            User user_data = new User();
            DBOperation dbOperation = new DBOperation();
            SqlCommand sqlCommand = new SqlCommand("CheckUser");
            sqlCommand.CommandType = CommandType.StoredProcedure;
            sqlCommand.Parameters.AddWithValue("@Emaild", Emaild);
            sqlCommand.Parameters.AddWithValue("@Password", Password);

            DataTable user_table = dbOperation.GetData(sqlCommand);
            //SqlDataReader sdr = sqlCommand.ExecuteReader();
            //while (sdr.Read())  
            //{
            //    user_data.Id = new Guid(sdr[0].ToString());
            //    user_data.Emaild = sdr[1].ToString();
            //    user_data.Password = sdr[2].ToString();
            //    user_data.IsActive = Convert.ToBoolean(sdr[5]);
            //    user_data.CreatedOn = Convert.ToDateTime(sdr[6]);
            //}

            foreach (DataRow row in user_table.Rows)
            {
                user_data.Id = new Guid(row["Id"].ToString());
                user_data.Emaild = row["Emaild"].ToString();
                user_data.Password = row["Password"].ToString();
                user_data.IsActive = Convert.ToBoolean(row["IsActive"]);
                user_data.CreatedOn = Convert.ToDateTime(row["CreatedOn"]);

            }
            return user_data;
        }

        public bool AddingUser(Guid Id, string Emaild, string Password, string Name, string MobileNo, bool IsActive, DateTime CreatedOn)
        {
            DBOperation dbOperation = new DBOperation();
            SqlCommand sqlCommand = new SqlCommand("AddUser");
            sqlCommand.CommandType = CommandType.StoredProcedure;
            sqlCommand.Parameters.AddWithValue("@Id", Id);
            sqlCommand.Parameters.AddWithValue("@Emaild", Emaild);
            sqlCommand.Parameters.AddWithValue("@Password", Password);
            sqlCommand.Parameters.AddWithValue("@Name", Name);
            sqlCommand.Parameters.AddWithValue("@MobileNo", MobileNo);
            sqlCommand.Parameters.AddWithValue("@IsActive", IsActive);
            sqlCommand.Parameters.AddWithValue("@CreatedOn", CreatedOn);

            return dbOperation.SaveData(sqlCommand);
        }
    }
}
