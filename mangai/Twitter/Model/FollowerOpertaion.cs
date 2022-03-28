using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Twitter.DBConnection;

namespace Twitter.Model
{
    public class FollowerOperation
    {
        public List<following> Getfollowers(Guid User_Id)
        {
            List<following> followdList = new List<following>();
            try
            {
                bool isSuccess = false;

                DBOperation dbOperation = new DBOperation();
                SqlCommand sqlCommand = new SqlCommand("sp_Getfollowers");
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@User_Id", User_Id);
                DataTable followers_table = dbOperation.GetData(sqlCommand);
                foreach (DataRow row in followers_table.Rows)
                {
                    following followdetails = new following();
                    followdetails.Id = new Guid(Convert.ToString(row["Id"]));
                    followdetails.Fristname = Convert.ToString(row["Fristname"]);

                    followdList.Add(followdetails);
                }
               
                return followdList;
            }

            catch (Exception ex)
            {
                throw ex;
            }


        }
    }
}
