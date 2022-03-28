using SWapp.Model;
using System.Data.SqlClient;
using SWapp.DBConnection;
using System.Data;

namespace SWapp.Data
{

    public class UserOperation
    {
        // string connectionString = "data source=LAPTOP-4HJUNB7H\\SQLEXPRESS;initial catalog=swiggy;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;";
        /*  public User CheckUserExist(string name, string password)
          {
              User user_data = new User();
              try
              {
                  using (SqlConnection con = new SqlConnection(connectionString))
                  {
                      // Insert query  
                      using (SqlCommand cmd = new SqlCommand("CheckUser"))
                      {
                          cmd.CommandType = System.Data.CommandType.StoredProcedure;
                          cmd.Connection = con;
                          // opening connection  
                          con.Open();
                          // Passing parameter values  
                          cmd.Parameters.AddWithValue("@name", name);
                          cmd.Parameters.AddWithValue("@password", password);

                          // Retrieving Record from datasource  
                          SqlDataReader sdr = cmd.ExecuteReader();
                          // Reading and Iterating Records  
                          while (sdr.Read())
                          {

                              user_data.Id = new Guid(sdr[0].ToString());
                              user_data.Name = Convert.ToString(sdr[1]);
                              user_data.Password = Convert.ToString(sdr[2]);
                              // user_data.IsActive = Convert.ToBoolean(sdr[3].ToString());
                              user_data.CreatedOn = Convert.ToDateTime(sdr[4].ToString());
                          }
                      }
                  }

              }
              catch (Exception ex)
              {
                  throw ex;
              }

              return user_data;
          }
*/

        public User CheckUserExist(string name, string password)
        {

            User user_data = new User();
            DBAccess dbOperation = new DBAccess();
            SqlCommand sqlCommand = new SqlCommand("CheckUser");
            sqlCommand.CommandType = CommandType.StoredProcedure;
            sqlCommand.Parameters.AddWithValue("@name", name);
            sqlCommand.Parameters.AddWithValue("@password", password);
            DataTable user_table = dbOperation.GetData(sqlCommand);
            foreach (DataRow row in user_table.Rows)
            {
                user_data.Id = new Guid(row["Id"].ToString());
                user_data.Name = row["Name"].ToString();
                user_data.Password = row["Password"].ToString();
                user_data.IsActive = Convert.ToBoolean(row["IsActive"]);
                user_data.CreatedOn = Convert.ToDateTime(row["CreatedOn"]);
                // user_data.Emaild = row["Emaild"].ToString();
            }
            return user_data;
        }

       

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
        
    }
}
