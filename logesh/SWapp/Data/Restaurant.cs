using SWapp.DBConnection;
using SWapp.Model;
using System.Data;
using System.Data.SqlClient;

namespace SWapp.Data
{
    public class Restaurant
    {
        // string connectionString = "data source=LAPTOP-4HJUNB7H\\SQLEXPRESS;initial catalog=swiggy;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;";



        /*  public List<Restaurantdata> RestaruntDetails()
          {
              //Restaurantdata Restaurant_Data = new Restaurantdata();

              List<Restaurantdata> Restaurantdetails = new List<Restaurantdata>();

              try
              {
                  using (SqlConnection con = new SqlConnection(connectionString))
                  {
                      // Insert query  
                      using (SqlCommand cmd = new SqlCommand("usp_SelectRestaurants"))
                      {
                          cmd.CommandType = System.Data.CommandType.StoredProcedure;
                          cmd.Connection = con;
                          // opening connection  
                          con.Open();

                          //cmd.Parameters.AddWithValue("@UserId",User_Id);

                          SqlDataReader sdr = cmd.ExecuteReader();

                          // Reading and Iterating Records  


                          while (sdr.Read())
                          {

                              {
                                  Restaurantdata restaurant = new Restaurantdata()
                                  {
                                      Id = new Guid(sdr[0].ToString()),
                                      Name= Convert.ToString(sdr[1]),
                                      Rating=Convert.ToString(sdr[2]),
                                      Restaurant_Image=Convert.ToString(sdr[3]),
                                      Food_Type=Convert.ToString(sdr[4]),




                                  };
                                  Restaurantdetails.Add(restaurant);
                              }


                          }

                      }
                  }

              }
              catch (Exception ex)
              {
                  throw ex;
              }

              return Restaurantdetails;
          }
  */
        public List<Restaurantdata> RestaruntDetails()
        {
            List<Restaurantdata> Restaurantdetails = new List<Restaurantdata>();

            SqlCommand cmd = new SqlCommand("usp_SelectRestaurants");
            cmd.CommandType = CommandType.StoredProcedure;
            DBAccess dboperation = new DBAccess();
            DataTable Restaurants_table = dboperation.GetData(cmd);
            foreach (DataRow row in Restaurants_table.Rows)
            {
                Restaurantdata restaurant = new Restaurantdata();
                restaurant.Id = new Guid(row["Id"].ToString());
                restaurant.Name= row["Name"].ToString();
                restaurant.Rating = row["Rating"].ToString();
                restaurant.Restaurant_Image =  row["Restaurant_Image"].ToString();
                restaurant.Food_Type =  row["Food_Type"].ToString();
                Restaurantdetails.Add(restaurant);
            }
            return Restaurantdetails;

        }
        
        }
}
