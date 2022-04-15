using SWapp.DBConnection;
using SWapp.Model;
using System.Data;
using System.Data.SqlClient;

namespace SWapp.Data
{
    public class Items
    {

        //  string connectionString = "data source=LAPTOP-4HJUNB7H\\SQLEXPRESS;initial catalog=swiggy;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;";
        #region oldcode

        //public List<MenuData> MenuDetails(Guid Restaurant_Id)
        //{
        //    List<MenuData> menuinfo = new List<MenuData>();

        //    try
        //    {
        //        using (SqlConnection con = new SqlConnection(connectionString))
        //        {
        //            // Insert query  
        //            using (SqlCommand cmd = new SqlCommand("Itemlist"))
        //            {
        //                cmd.CommandType = System.Data.CommandType.StoredProcedure;
        //                cmd.Connection = con;
        //                // opening connection  
        //                con.Open();
        //                // Passing parameter values

        //                cmd.Parameters.AddWithValue("@Restaurant_Id", Restaurant_Id);

        //                {
        //                    // Retrieving Record from datasource  
        //                    SqlDataReader sdr = cmd.ExecuteReader();
        //                    // Reading and Iterating Records  
        //                    while (sdr.Read())
        //                    {
        //                        {
        //                            MenuData menudetails = new MenuData()
        //                            {

        //                                Id =   new Guid(Convert.ToString(sdr[0])),
        //                                FoodName = Convert.ToString(sdr[1]),
        //                                Rating = Convert.ToString(sdr[2]),
        //                                FoodImage = Convert.ToString( sdr[3]),
        //                                Price =  Convert.ToString(sdr[4]),
        //                                Quantity = Convert.ToString(sdr[5]),

        //                            };

        //                            menuinfo.Add(menudetails);
        //                        }

        //                    }
        //                }
        //            }
        //        }
        //    }

        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }

        //    return menuinfo;
        //}

        #endregion
        public List<MenuData> MenuDetails(Guid Restaurant_Id)
        {
            List<MenuData> menuinfo = new List<MenuData>();

            SqlCommand cmd = new SqlCommand("Itemlist");
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@Restaurant_Id", Restaurant_Id);
            DBAccess dboperation = new DBAccess();
            //var data = dboperation.GetData(cmd);
            // SqlDataReader sdr = cmd.ExecuteReader();            
            DataTable items_table = dboperation.GetData(cmd);
            foreach (DataRow row in items_table.Rows)
            {
                MenuData items_data = new MenuData();
                items_data.Id = new Guid(row["Id"].ToString());
                items_data.FoodName = row["FoodName"].ToString();
                items_data.Rating = row["Rating"].ToString();
                items_data.FoodImage =  row["FoodImage"].ToString();
                items_data.Price =  row["Price"].ToString();
                items_data.Quantity =  row["Quantity"].ToString();
                menuinfo.Add(items_data);
            }


            return menuinfo;
        }



    }
}





