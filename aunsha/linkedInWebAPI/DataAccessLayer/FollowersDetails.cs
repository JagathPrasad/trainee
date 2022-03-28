using linkedInWebAPI.DBConnection;
using linkedInWebAPI.Models;
using System.Data;
using System.Data.SqlClient;

namespace linkedInWebAPI.DataAccessLayer
{
    public class FollowersDetails
    {
        //string connectionString = "data source=LAPTOP-D4EI0KO2\\ANUSHA;initial catalog=LinkedIn;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;";

        //public List<Followers> FollowersList(Guid User_Id)
        //{
        //    List<Followers> followers_data = new List<Followers>();

        //    try
        //    {
        //        using (SqlConnection con = new SqlConnection(connectionString))
        //        {
        //            // Insert query  
        //            using (SqlCommand cmd = new SqlCommand("ViewFollowers"))
        //            {
        //                cmd.CommandType = System.Data.CommandType.StoredProcedure;
        //                cmd.Connection = con;
        //                // opening connection  
        //                con.Open();
        //                // Passing parameter values

        //                cmd.Parameters.AddWithValue("@User_Id", User_Id);

        //                {
        //                    // Retrieving Record from datasource  
        //                    SqlDataReader sdr = cmd.ExecuteReader();
        //                    // Reading and Iterating Records  
        //                    while (sdr.Read())
        //                    {

        //                        Followers followersdetails = new Followers()
        //                        {
        //                            Id = new Guid(sdr[0].ToString()),
        //                            Name = sdr[1].ToString(),

        //                        };

        //                        followers_data.Add(followersdetails);

        //                    }
        //                }
        //            }
        //        }
        //    }

        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }

        //    return followers_data;
        //}

        public List<Followers> FollowersList(Guid User_Id)
        {
            List<Followers> followers_data = new List<Followers>();
            DBOperation dbOperation = new DBOperation();
            SqlCommand sqlCommand = new SqlCommand("ViewFollowers");
            sqlCommand.CommandType = CommandType.StoredProcedure;
            sqlCommand.Parameters.AddWithValue("@User_Id", User_Id);


            DataTable followers_table = dbOperation.GetData(sqlCommand);

            if (followers_table.Rows.Count > 0)
            {
                foreach (DataRow row in followers_table.Rows)
                {

                    Followers followers = new Followers();
                    followers.Id = new Guid(Convert.ToString(row["Id"]));
                    followers.Name = Convert.ToString(row["Name"]);

                    followers_data.Add(followers);

                }
            }

            return followers_data;
        }
    }
}
