using SWapp.Model;
using System.Data.SqlClient;
using SWapp.DBConnection;
using System.Data;

namespace SWapp.Data
{
    public class AddToCartList
    {
        // string connectionString = "data source=LAPTOP-4HJUNB7H\\SQLEXPRESS;initial catalog=swiggy;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;";


        /*  public bool CartData(Guid Id, Guid Food_Id, Guid Restaurant_Id, string FoodName, bool IsActive, bool IsDelete, DateTime CreatedOn,Guid UserId)
          {
              bool isSuccess = false;


              try
              {
                  using (SqlConnection con = new SqlConnection(connectionString))
                  {
                      // Insert query  
                      using (SqlCommand cmd = new SqlCommand("AddIntoCart"))
                      {
                          cmd.CommandType = System.Data.CommandType.StoredProcedure;
                          cmd.Connection = con;
                          // opening connection  
                          con.Open();
                          // Passing parameter values  
                          cmd.Parameters.AddWithValue("@Id", Id);
                          cmd.Parameters.AddWithValue("@Restaurant_Id", Restaurant_Id);
                          cmd.Parameters.AddWithValue("@Food_Id", Food_Id);
                          cmd.Parameters.AddWithValue("@FoodName", FoodName);
                          cmd.Parameters.AddWithValue("@IsActive", IsActive);
                          cmd.Parameters.AddWithValue("@IsDelete", IsDelete);
                          cmd.Parameters.AddWithValue("@CreatedOn", CreatedOn);

                          cmd.Parameters.AddWithValue("@UserId", UserId);

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
     */

        public bool CartData(Guid Id, Guid Food_Id, Guid Restaurant_Id, string FoodName, bool IsActive, bool IsDelete, DateTime CreatedOn, Guid UserId)
        {
            DBAccess dbOperation = new DBAccess();
            SqlCommand sqlCommand = new SqlCommand("AddIntoCart");
            sqlCommand.CommandType = CommandType.StoredProcedure;
            sqlCommand.Parameters.AddWithValue("@Id", Id);
            sqlCommand.Parameters.AddWithValue("@Restaurant_Id", Restaurant_Id);
            sqlCommand.Parameters.AddWithValue("@Food_Id", Food_Id);
            sqlCommand.Parameters.AddWithValue("@FoodName", FoodName);
            sqlCommand.Parameters.AddWithValue("@IsActive", IsActive);
            sqlCommand.Parameters.AddWithValue("@IsDelete", IsDelete);
            sqlCommand.Parameters.AddWithValue("@CreatedOn", CreatedOn);
            sqlCommand.Parameters.AddWithValue("@UserId", UserId);

            return dbOperation.SaveData(sqlCommand);
        }
    }
}
