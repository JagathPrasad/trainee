using Microsoft.Data.SqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Twitter.DBConnection;
using static System.Net.Mime.MediaTypeNames;

namespace Twitter.Model
{
    public class Postoperation
    {

        public List<Posts> Getpost(Guid User_Id)
        {
            List<Posts> postdetail = new List<Posts>();
            try
            {
                //Users user_data = new Users();
                DBOperation dbOperation = new DBOperation();
                SqlCommand sqlCommand = new SqlCommand("usp_SelectPostDetails");
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@User_Id", User_Id);
                DataTable user_table = dbOperation.GetData(sqlCommand);
                //SqlDataReader sdr = sqlCommand.ExecuteReader();

                foreach (DataRow row in user_table.Rows)
                {
                    Posts post = new Posts();
                    post.Id = new Guid(row["Id"].ToString());
                    post.Username = Convert.ToString(row["Username"]);
                    post.Email = Convert.ToString(row["Email"]);
                    post.Description = Convert.ToString(row["Description"]);
                    post.Image = Convert.ToString(row["Image"]);
                    post.Comment_text = Convert.ToString(row["Comment_text"]);
                    post.Reply = Convert.ToString(row["Reply"]);
                    post.Islike = Convert.ToString(row["Islike"]);
                    postdetail.Add(post);
                }
                return postdetail;
            }

            catch (Exception ex)
            {
                throw ex;
            }

        }

        public bool Insertcomment(Guid user_id, Guid post_id, string Comment_text)
        {
            try
            {
                bool isSuccess = true;

                DBOperation dbOperation = new DBOperation();
                SqlCommand sqlCommand = new SqlCommand("sp_insertcomment");
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@user_id", user_id);
                sqlCommand.Parameters.AddWithValue("@post_id", post_id);
                sqlCommand.Parameters.AddWithValue("@Comment_text", Comment_text);
                DataTable user_table = dbOperation.GetData(sqlCommand);
                //SqlDataReader sdr = sqlCommand.ExecuteReader();

                return isSuccess;
            }

            catch (Exception ex)
            {
                throw ex;
            }

        }

        public dynamic Insertlike(Guid Post_Id, Guid User_id, bool Islike)
        {
            try
            {
                DBOperation dbOperation = new DBOperation();
                SqlCommand sqlCommand = new SqlCommand("sp_Addlikes");
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@Post_Id", Post_Id);
                sqlCommand.Parameters.AddWithValue("@User_Id", User_id);
                sqlCommand.Parameters.AddWithValue("@Islike", Islike);
                return dbOperation.SaveData(sqlCommand);
            }
            catch(Exception ex)
            {
                throw ex;
            }

        }
                     
        public dynamic InsertPost(Guid Post_Id, Guid user_id, string Descrption, string Image)
        {
            try
            { 
            
            DBOperation dbOperation = new DBOperation();
            SqlCommand sqlCommand = new SqlCommand("Insertnewpost");
            sqlCommand.CommandType = CommandType.StoredProcedure;
            sqlCommand.Parameters.AddWithValue("@Post_Id", Post_Id);
            sqlCommand.Parameters.AddWithValue("@User_Id", user_id);
            sqlCommand.Parameters.AddWithValue("@Descrption", Descrption);
            sqlCommand.Parameters.AddWithValue("@Image", Image);
            return dbOperation.SaveData(sqlCommand);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }


    }
}




